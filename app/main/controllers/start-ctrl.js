'use strict';
angular.module('main')
.controller('StartCtrl', function ($scope, Start, Config) {
  console.log('Hello from your Controller: StartCtrl in module main:. This is your scope:', $scope);

  // bind data from service
  $scope.someData = Start.someData;
  $scope.env = Config.ENV;

  // TODO: do your controller thing
});
