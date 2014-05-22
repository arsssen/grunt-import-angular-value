/*
 * import-angular-value
 * https://github.com/arsssen/grunt-import-angular-value
 *
 * Copyright (c) 2014 Arsen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Configuration to be run (and then tested).
        import_angular_value: {
            default_options: {
                options: {
                    path: '../../js/skins/vbet.com.js'
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.

    // By default, lint and run all tests.
    grunt.registerTask('default', ['import_angular_value']);

};
