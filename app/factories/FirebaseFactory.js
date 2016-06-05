"use strict"

app.factory("FirebaseFactory", function($q, $http){

  return {
    //Function to grab data from  (firbase eventually)
    // getMoviesFromApi : function(){
    //   let movies = [];
    //   return $q(function(resolve, reject){
    //     $http.get(`./data/movies.json`)
    //       .success(function(moviesJson){
    //         let moviesObject = moviesJson.Search
    //         Object.keys(moviesObject).forEach(function(key){
    //           // moviesObject[key].imdbID = key;
    //           console.log("key", key);
    //           movies.push(moviesObject[key]);
    //         });
    //         resolve(movies);
    //       })
    //       .error(function(error){
    //         reject(error);
    //       })
    //   });
    // }
    toWatchListArray:[],

    updateMoviesToWatchList: function (movie){
        this.toWatchListArray.push(movie);
      },

    haveWatchedListArray:[],


//Movie comes into watched list with rating property 
//How to display rating in seen view
    updateMoviesWatchedList: function (movie){
      this.haveWatchedListArray.push(movie);
      console.log("haveWatchedListArray", this.haveWatchedListArray);
    },

    deleteToWatchListArrayItem: function(imdbID) {
      for (var i = 0; i < this.toWatchListArray.length; i++) {
        for (var key in this.toWatchListArray[i] ) {
          if (this.toWatchListArray[i][key] === imdbID) {
            this.toWatchListArray.splice(i, 1);
            break;
          };
        }
      }
    }





  }
});