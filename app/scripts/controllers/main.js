'use strict';

/**
 * @ngdoc function
 * @name medblockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the medblockApp
 */
angular.module('medblockApp')
  .controller('MainCtrl', function ($scope, $state) {
    $scope.state = $state;
  });
