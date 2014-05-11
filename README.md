# karma-ietester-starter

> Launcher for IETester.

## Installation

The easiest way is to keep `karma-ietester-starter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-ietester-starter": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-ietester-starter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['IETester', 'IETester7'],

        // you can define custom flags
        customLaunchers: {
          IETester7: {
            base: 'IETester',
            flags: ['-ie7']
          }
        }
  });
};
```

Or you can simple create a custom version of IETester:
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    browsers: ['IETester'],
  });
};
```

You can pass list of browsers as a CLI argument too:
```bash
karma start --browsers IETester,IETester7
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com

