'use strict';

var setupEnvironment = function ( environment ) {

    var url = '';

    switch( environment ) {
        case 'production':
            url = 'http://publicip.com';
            break;
        case 'localhost':
            url = 'http://127.0.0.1:8080';
            break;
    }

    return url;
};

angular.module('app.api', [])
    .config(function () {})
    .constant('baseUrl', setupEnvironment('localhost'))
    .constant('maxVelUrl', '/velocity');