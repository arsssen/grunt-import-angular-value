# import-angular-value

> Imports value object from Angular module.value

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install import-angular-value --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('import-angular-value');
```

## The "import_angular_value" task

### Overview
In your project's Gruntfile, add a section named `import_angular_value` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  import_angular_value: {
            path: null,
            modules: [],
            configVarName: 'angularValue'
  },
});
```

### Options

#### options.path
Type: `String`
Default value: `null`

Path to JS file containing module.value call

#### options.modules
Type: `Array`
Default value: `[]`

array of module names used in js

#### options.configVarName
Type: `String`
Default value: `'angularValue'`

name of grunt config key where loaded configuration will be stored

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever.


```js
grunt.initConfig({
  import_angular_value: {
    options: {
        path: '../js/config.js',
        modules: ['MyModule1', 'MyModule2']
    }
  },
});
```

../js/config.js content:


```js
MyModule1.value('config', { host: 'example.com'});

MyModule2.value('config2', { port: 8080});
```

and you can use these values in gruntfile, like:

```js

some_other_task: {
    options: {
        hostname: <%=angularValue.MyModule1.host>,
        port: <%=angularValue.MyModule2.port>,
    }
}

```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
