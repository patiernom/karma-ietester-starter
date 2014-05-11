/**
 * Created by Marco on 11/05/2014.
 */
var fs = require('fs');
var processName = 'IETester.exe';

var IETesterBrowser = function(baseBrowserDecorator, args) {
    baseBrowserDecorator(this);

    var flags = args.flags || ['-ie'];
    this._start = function(url) {
        var self = this,
            command = this._getCommand(),
            i = 0, flag = flags[i],
            cmdArg = [];

        for (; flag; i+=1, flag = flags[i]) {
            cmdArg.push(flag);
            cmdArg.push(url);
        }

        self._execCommand(command, cmdArg);
    };
};

function getIETesterExe() {
    if (process.platform !== 'win32') {
        return null;
    }

    var suffix = '\\Core Services\\'+ '\\IETester\\' + processName,
        prefixes = [process.env.PROGRAMFILES, process.env['PROGRAMFILES(X86)']],
        i = 0, prefix = prefixes[i], IETesterDirectory;

    for (; prefix; i+=1, prefix = prefixes[i]) {
        if (prefix && fs.existsSync(prefix + suffix)) {
            IETesterDirectory = prefix + suffix;
        }
    }

    return IETesterDirectory;
}

IETesterBrowser.prototype = {
    name: 'IETester',
    DEFAULT_CMD: {
        win32: getIETesterExe()
    },
    ENV_CMD: 'IE_BIN'
};


IETesterBrowser.$inject = ['baseBrowserDecorator', 'args'];


// PUBLISH MODULE
module.exports = {
    'launcher:IETester': ['type', IETesterBrowser]
};