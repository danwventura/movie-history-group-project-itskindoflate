app.controller("OMDBSearchCtrl", function($scope, $location, omdbFactory){


  // omdbFactory.GetMoviesFromApi().then(function(moviesObject){
  //   console.log("moviesObject from factory promise", moviesObject);
  $scope.movieArray = [];

  $scope.dataCheck = function(){
      omdbFactory.getMoviesFromApi().then(function(moviesObject){
      console.log("moviesObject from factory promise", moviesObject);

    // $location.url('#/')
      $scope.movieArray = moviesObject;
      console.log("Movie Array", $scope.movieArray );
  })
  }


});