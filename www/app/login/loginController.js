'use strict';
angular.module('app')
  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state, authService) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data).success(function(result) {
        if(authService.setUserIdentity(result)){
          $state.go("tab.dash");
          $scope.data = {};
        }
      }).error(function(result) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login failed!',
          template: result.error
        });
      });
    };
  });
