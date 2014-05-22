/*
 * import-angular-value
 * https://github.com/arsssen/grunt-import-angular-value
 *
 * Copyright (c) 2014 Arsen
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs');

module.exports = function (grunt) {

    grunt.registerMultiTask('import_angular_value', 'Imports value object from Angular module.value', function () {

        var options = this.options({
            path: null,
            modules: [],
            configVarName: 'angularValue'
        });

        var ConfigObj = {}, importer = { noop: function() {}};

        var sourceCode = fs.readFileSync(options.path, {encoding: 'utf8'});
        var i;
        function createLoader(moduleName) {
            return function (name, configObj) {
                ConfigObj[moduleName] = {};
                ConfigObj[moduleName][name] = configObj;
            };
        }
        for (i = 0; i < options.modules.length; i++) {
            var moduleName = options.modules[i];
            importer[moduleName] = createLoader(moduleName);

            //TODO: use regexp instead of replace, so there will be no need to specify module names
            sourceCode = sourceCode.replace(moduleName + '.value', 'importer.' + moduleName);

            //skip others
            sourceCode = sourceCode.replace(moduleName + '.run', 'importer.noop');
            sourceCode = sourceCode.replace(moduleName + '.config', 'importer.noop');
            sourceCode = sourceCode.replace(moduleName + '.controller', 'importer.noop');
            sourceCode = sourceCode.replace(moduleName + '.factory', 'importer.noop');
            sourceCode = sourceCode.replace(moduleName + '.service', 'importer.noop');
            sourceCode = sourceCode.replace(moduleName + '.directive', 'importer.noop');


        }
        eval(sourceCode);
        grunt.config.set(options.configVarName, ConfigObj);

    });

};
