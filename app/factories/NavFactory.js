"use strict";

app.factory('NavFactory', function() {

  var onLogin = true;
  var onMyOrWatchedMovies = false;
  var OMDBSearchInput = null;
  var movieSearchInput = null;
  var pageTitle = "";
  var myMovieArrayEmpty = true;
  var watchedMovieArrayEmpty = true;

  return {
    getOnLogin: function() {
      return onLogin;
    },

    setOnLogin: function(sentValue) {
        onLogin = sentValue;
      return onLogin
    },

    getOnMyOrWatchedMovies: function() {
      return onMyOrWatchedMovies;
    },

    setOnMyOrWatchedMovies: function(sentValue) {
      onMyOrWatchedMovies = sentValue;
    },

    getPageTitle: function() {
      return pageTitle;
    },

    setPageTitle: function(sentPageTitle) {
      pageTitle = sentPageTitle;
    },

    getOMDBSearchInput: function() {
      return OMDBSearchInput;
    },

    setOMDBSearchInput: function(sentOMDBSearch) {
      OMDBSearchInput = sentOMDBSearch;
    },

    getMovieSearchInput: function() {
      return movieSearchInput;
    },

    setMovieSearchInput: function(sentMovieSearch) {
      movieSearchInput = sentMovieSearch;
    },

    getMyMovieArrayEmpty: function() {
      return myMovieArrayEmpty;
    },

    setMyMovieArrayEmpty: function(sentMovieFlag) {
      myMovieArrayEmpty = sentMovieFlag;
    },

    getWatchedMovieArrayEmpty: function() {
      return watchedMovieArrayEmpty;
    },

    setWatchedMovieArrayEmpty: function(sentMovieFlag) {
      watchedMovieArrayEmpty = sentMovieFlag;
    }


  };
});