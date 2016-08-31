'use strict';
angular.module('app').service('currentUserService',  function(authService) {
    return{
        user: authService.getUserIdentity().user
    }
});

