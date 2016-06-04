"use strict";

var app = angular.module("MovieHistory", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/movieCard.html",
      controller: ""
    }).
    when("/watched", {
      templateUrl: "partials/movieCard.html",
      controller: "WatchedCtrl"
    }).
    when("/register", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/login", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});
