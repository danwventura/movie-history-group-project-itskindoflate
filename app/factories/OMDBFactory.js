"use strict";

app.factory("OMDBFactory", function($q, $http){

  return {
    //Function to grab data from (json) OMDB API
    getMoviesFromApi : function(searchTerm){

      let movies = [];

      return $q(function(resolve, reject){
        $http.get(`http://www.omdbapi.com/?s=${searchTerm}&y=&type=&r=json`)
          .success(function(moviesJson){
            let moviesObject = [];
            moviesObject = moviesJson.Search;
            Object.keys(moviesObject).forEach(function(key){
              movies.push(moviesObject[key]);
            });
            resolve(movies);
          })
          .error(function(error){
            reject(error);
          });
      });
    }



  };
});