app.controller("OMDBSearchCtrl", function($scope, $location, OMDBFactory, FirebaseFactory){


  // omdbFactory.GetMoviesFromApi().then(function(moviesObject){
  //   console.log("moviesObject from factory promise", moviesObject);
  $scope.movieArray = [];

  $scope.dataCheck = function(searchTerm){
      
      OMDBFactory.getMoviesFromApi(searchTerm).then(function(moviesObject){
      console.log("moviesObject from factory promise", moviesObject);

    // $location.url('#/')
      $scope.movieArray = moviesObject;
      console.log("Movie Array", $scope.movieArray );
  })
  }

  $scope.DeleteMovieArrayItem = function(imdbID) {
      for (var i = 0; i < $scope.movieArray.length; i++) {
        for (var key in $scope.movieArray[i] ) {
          if ($scope.movieArray[i][key] === imdbID) {
            
            FirebaseFactory.putMoviesIntoFirebase($scope.movieArray[i])

            // FirebaseFactory.updateMoviesToWatchList($scope.movieArray[i]);
            $scope.movieArray.splice(i, 1);
            break;
          };
        }
      }
      console.log("FirebaseFactory.toWatchListArray",FirebaseFactory.toWatchListArray);
    }






});