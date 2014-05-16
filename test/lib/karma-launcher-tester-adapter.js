/**
 * Created by Marco on 17/05/2014.
 */
"use strict";

var karmaLauncherTesterAdapter = function(launcher){
    var key,
        launcherName = 'not defined',
        browserAdapter = {};

    if(!launcher) { return ;}

    for (key in launcher) {
        if (key.indexOf('launcher:') >= 0) {
            launcherName = key.split(':')[1];
            browserAdapter = launcher[key][1];
        }
    }

    return {
        name:launcherName,
        adapter:browserAdapter
    };
};

module.exports = karmaLauncherTesterAdapter;