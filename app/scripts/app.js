'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # Postcodes
 *
 * Main module of the application.
 */

var app = angular
  .module('app', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'hljs'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.filter('highlight', function($sce) {
  return function(input, lang) {
    if (lang && input) return hljs.highlight(lang, input).value;
    return input;
  }
}).filter('unsafe', function($sce) { return $sce.trustAsHtml; })