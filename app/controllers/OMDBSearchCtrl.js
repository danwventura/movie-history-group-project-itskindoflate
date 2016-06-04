app.controller("OMDBSearchCtrl", function($scope, $location, OMDBFactory){


  // omdbFactory.GetMoviesFromApi().then(function(moviesObject){
  //   console.log("moviesObject from factory promise", moviesObject);
  $scope.movieArray = [];

  $scope.dataCheck = function(){
      OMDBFactory.getMoviesFromApi().then(function(moviesObject){
      console.log("moviesObject from factory promise", moviesObject);

    // $location.url('#/')
      $scope.movieArray = moviesObject;
      console.log("Movie Array", $scope.movieArray );
  })
  }

});