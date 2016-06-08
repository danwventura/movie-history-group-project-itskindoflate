app.controller("OMDBSearchCtrl", function($scope, $location, OMDBFactory, FirebaseFactory, NavFactory){

  // omdbFactory.GetMoviesFromApi().then(function(moviesObject){
  //   console.log("moviesObject from factory promise", moviesObject);

  NavFactory.setOnLogin(false);
  NavFactory.setPageTitle("OMDB Search Page");


  $scope.movieArray = [];

  $scope.dataCheck = function(searchTerm){
      
      OMDBFactory.getMoviesFromApi(searchTerm).then(function(moviesObject){
      $scope.movieArray = moviesObject;
    })
  };

  $scope.$watch(NavFactory.getOMDBSearchInput, function(newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.dataCheck(NavFactory.getOMDBSearchInput());
    }
  })

  $scope.DeleteMovieArrayItem = function(imdbID) {
      for (var i = 0; i < $scope.movieArray.length; i++) {
        for (var key in $scope.movieArray[i] ) {
          if ($scope.movieArray[i][key] === imdbID) {
            
            FirebaseFactory.postMoviesIntoFirebase($scope.movieArray[i]);
            NavFactory.setMyMovieArrayEmpty(false);
            // FirebaseFactory.getMoviesFromFirebase();
            $scope.movieArray.splice(i, 1);
            break;
          };
        }
      }
    }

});