(function () {
    'use strict';

    angular
        .module('thinkster', [
            'thinkster.routes',
            'thinkster.authentication',
            'thinkster.config',
            'thinkster.layout',
            'thinkster.posts',
            'thinkster.utils',
            'thinkster.profiles'
        ]);

    angular.module('thinkster.routes', ['ngRoute']);
    angular.module('thinkster.config', [])
})();