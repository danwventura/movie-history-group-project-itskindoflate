"use strict"

app.factory("FirebaseFactory", function($q, $http, AuthFactory, NavFactory){

  return {

    toWatchListArray:[],
    haveWatchedListArray:[],

    getMoviesFromFirebase : function() {
      let user = AuthFactory.getUser();

      return $q( (resolve, reject) => {
        $http.get(`https://ng-bg-mh.firebaseio.com/movies.json?orderBy="uid"&equalTo="${user.uid}"`)
          .success( (returnObject) => {
            resolve(returnObject);
        }).then( (returnObject) => {
          Object.keys(returnObject.data).forEach( (key) => {
            if (returnObject.data[key].userRating === "notRated") {
              returnObject.data[key].id = key;
              this.updateMoviesToWatchList(returnObject.data[key])
              NavFactory.setMyMovieArrayEmpty(false);
            } else {
              returnObject.data[key].id = key;
              this.updateMoviesWatchedList(returnObject.data[key])
              NavFactory.setWatchedMovieArrayEmpty(false);
            };
          });
        })
      })
    },

    putMoviesIntoFirebase : function (movie) {
          console.log(" movie.id", movie.id);
          console.log(" movie.userRating ", movie.userRating);
      return $q(function(resolve,reject){

          $http.put(`https://ng-bg-mh.firebaseio.com/movies/${movie.id}.json`, movie)
          .success(function(response){
            console.log("res", response);
              resolve(response);
          })
      })
    },

    postMoviesIntoFirebase : function (movie) {;
      let user = AuthFactory.getUser();
      return $q(function(resolve,reject){
          $http.post(`https://ng-bg-mh.firebaseio.com/movies.json`,
              JSON.stringify({
                  Title:movie.Title,
                  Year:movie.Year,
                  imdbID:movie.imdbID,
                  Poster:movie.Poster,
                  userRating: "notRated",
                  uid:  user.uid
              }))
          .success(function(response){
              resolve(response);
          })
      })
    },

    clearMoviesToWatchlist: function (){
      this.toWatchListArray.splice(0);
      this.haveWatchedListArray.splice(0);
    },

    updateMoviesToWatchList: function (movie){
      this.toWatchListArray.push(movie);
      },

//Movie comes into watched list with rating property
//How to display rating in seen view
    updateMoviesWatchedList: function (movie){
      this.haveWatchedListArray.push(movie);
    },

    deleteToWatchListArrayItem: function(sentID) {
      return $q((resolve,reject) => {
          $http.delete(`https://ng-bg-mh.firebaseio.com/movies/${sentID}.json`)
          .success((response)=>{
              resolve(response);
          })
      }).then( () => {

        for (var i = 0; i < this.toWatchListArray.length; i++) {
          for (var key in this.toWatchListArray[i] ) {
              console.log("Key", key);
              console.log("toWatchListArray", this.toWatchListArray[i])
            if (this.toWatchListArray[i][key] === sentID) {
              this.toWatchListArray.splice(i, 1);
              break;
            };
          }
      }


      })

    }

  }
});