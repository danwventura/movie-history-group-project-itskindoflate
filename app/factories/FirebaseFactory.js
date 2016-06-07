"use strict"

app.factory("FirebaseFactory", function($q, $http){

  return {

    toWatchListArray:[],

    haveWatchedListArray:[],

    getMoviesFromFirebase : function() {

      return $q( (resolve, reject) => {
        $http.get(`https://ng-bg-mh.firebaseio.com/movies.json`)
          .success( (returnObject) => {
            resolve(returnObject);
        }).then( (returnObject) => {
          Object.keys(returnObject.data).forEach( (key) => {
            if (returnObject.data[key].userRating === "notRated") {
              this.updateMoviesToWatchList(returnObject.data[key])
            } else {
              this.updateMoviesWatchedList(returnObject.data[key])
            };
          });
        })
      })
    },


    putMoviesIntoFirebase : function (movie) {;

      return $q(function(resolve,reject){
          $http.post(`https://ng-bg-mh.firebaseio.com/movies.json`,
              JSON.stringify({
                  Title:movie.Title,
                  Year:movie.Year,
                  imdbID:movie.imdbID,
                  Poster:movie.Poster,
                  userRating: "notRated",
                  uid: "null"
              }))
          .success(function(response){
              resolve(response);
          })
      })
    },

    clearMoviesToWatchlist: function (){
        this.toWatchListArray.splice(0)

    },

    updateMoviesToWatchList: function (movie){
      this.toWatchListArray.push(movie);
      },

//Movie comes into watched list with rating property
//How to display rating in seen view
    updateMoviesWatchedList: function (movie){
      this.haveWatchedListArray.push(movie);
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