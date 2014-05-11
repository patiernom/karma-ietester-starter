/**
 * Created by Marco on 11/05/2014.
 */
var IETesterBrowser = function(baseBrowserDecorator, script) {
    baseBrowserDecorator(this);

    this.name = script;

    this._getCommand = function() {
        return script;
    };
};

IETesterBrowser.$inject = ['baseBrowserDecorator', 'name'];


// PUBLISH MODULE
module.exports = {
    'launcher:IETester': ['type', IETesterBrowser]
};