"use strict"

app.factory("omdbFactory", function($q, $http){


  //Function to grab data from (json) OMDB API
  var getMoviesFromApi = function(){
    let movies = [];
    return $q(function(resolve, reject){
      $http.get(`./data/movies.json`)
        .success(function(moviesObject){
          Object.keys(moviesObject).forEach(function(key){
            moviesObject[key].imdbID = key;
            console.log("key", key);
            movies.push(moviesObject[key]);
          });
          resolve(movies);
        })
        .error(function(error){
          reject(error);
        })
    });
  };





});