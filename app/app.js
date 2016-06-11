"use strict";

var app = angular.module("MovieHistory", ["ngRoute"])
.constant ('firebaseURL', 'https://ng-bg-mh.firebaseio.com/');

let isAuth = (AuthFactory) => new  Promise ((resolve, reject) =>  {
  if (AuthFactory.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.config(function($routeProvider) {
  $routeProvider.
    when("/", {
      templateUrl: "partials/movieCard.html",
      controller: "OMDBSearchCtrl",
      resolve: {isAuth}
    }).
    when("/myMovies", {
      templateUrl: "partials/myMovie.html",
      controller: "myMovieCtrl",
      resolve: {isAuth}
    }).
    when("/watched", {
      templateUrl: "partials/watched.html",
      controller: "WatchedCtrl",
      resolve: {isAuth}
    }).
    when("/register", {
      templateUrl: "partials/login.html",
      controller: "LoginCtrl",
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


app.run(($location) => {
  let addressRef = new Firebase('https://ng-bg-mh.firebaseio.com/');
  addressRef.unauth();
  addressRef.onAuth( authData => {
    if(!authData) {
      $location.path('/login');
    }
  }); //firebase method
});
