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
      .state('about', {
		    url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      });
  });
