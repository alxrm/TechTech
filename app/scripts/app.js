'use strict';

/**
 * @ngdoc overview
 * @name techTechApp
 * @description
 * # techTechApp
 *
 * Main module of the application.
 */
angular
  .module('techTechApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
