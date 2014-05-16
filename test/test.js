/**
 * Created by Marco on 13/05/2014.
 */
"use strict";

var chai = require('chai'),
    expect = chai.expect,
    launcherSrc = require('../index.js'),
    adapter = require('./lib/karma-launcher-tester-adapter.js');

describe('IETester launcher for Karma', function() {
    var launcher = adapter(launcherSrc);

    it('has launcher name equal to IETester', function() {
        expect(launcher.name).to.be.equal('IETester');
    });

    it('has launcher prototype.name equal to IETester', function() {
        expect(launcher.adapter.prototype.name).to.be.equal('IETester');
    });

    it('has launcher prototype contain ENV_CMD key', function() {
        expect(launcher.adapter.prototype).to.include.keys('ENV_CMD');
    });

    it('has launcher prototype.ENV_CMD equal to IE_BIN', function() {
        expect(launcher.adapter.prototype.ENV_CMD).to.be.equal('IE_BIN');
    });

    it('has launcher prototype contain DEFAULT_CMD key', function() {
        expect(launcher.adapter.prototype).to.include.keys('DEFAULT_CMD');
    });

    it('has launcher prototype.DEFAULT_CMD contain win32 key', function() {
        expect(launcher.adapter.prototype.DEFAULT_CMD).to.include.keys('win32');
    });

    it('has launcher prototype.DEFAULT_CMD.win32 contain IETester.exe string', function() {
        expect(launcher.adapter.prototype.DEFAULT_CMD.win32).to.contain('IETester.exe');
    });

});