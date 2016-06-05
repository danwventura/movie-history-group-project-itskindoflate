app.controller("myMovieCtrl", function($scope, $location, FirebaseFactory){

  $scope.myMovieArray = [];

  function myMovieList(){
    let moviesJson = FirebaseFactory.getMoviesFromFirebase();

    console.log("moviesJson", moviesJson);


    Object.keys(moviesJson).forEach(function(key){
      console.log("key", key);
      console.log("movieJson Key", moviesJson[key]);

      if (moviesJson[key].userRating === "null" ){
          FirebaseFactory.updateMoviesToWatchList(movieJson[key]);
        }else {
          FirebaseFactory.updateMoviesWatchedList(moviesJson[key]);
        }
    });





    $scope.myMovieArray = FirebaseFactory.toWatchListArray;
    console.log("My Movie Array", $scope.myMovieArray );
  }

  $scope.addMovieRating = function(imdbID, rating) {
    for (var i = 0; i < $scope.myMovieArray.length; i++) {
      for (var key in $scope.myMovieArray[i] ) {
        if ($scope.myMovieArray[i][key] === imdbID) {
          $scope.myMovieArray[i]["userRating"] = rating;
          FirebaseFactory.updateMoviesWatchedList($scope.myMovieArray[i]);
          $scope.myMovieArray.splice(i, 1);
          break;
        };
      }
    }
    console.log("FirebaseFactory.haveWatchedListArray",FirebaseFactory.haveWatchedListArray);
  },

  $scope.DeleteMyMovieArrayItem = function(imdbID) {
            FirebaseFactory.deleteToWatchListArrayItem(imdbID);
            $scope.myMovieArray = FirebaseFactory.toWatchListArray;
          };

  myMovieList();

});