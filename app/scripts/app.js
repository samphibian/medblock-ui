'use strict';

/**
 * @ngdoc overview
 * @name medblockApp
 * @description
 * # medblockApp
 *
 * Main module of the application.
 */
angular
  .module('medblockApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
	$stateProvider
      .state('login', {
		    url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .state('success', {
		    url: '/success',
        templateUrl: 'views/success.html',
        controller: 'SuccessCtrl',
        controllerAs: 'success'
      })
      .state('prescription', {
        url: '/prescription',
        templateUrl: 'views/prescription.html',
        controller: 'PrescripCtrl',
        controllerAs: 'prescription'
      });
  });
