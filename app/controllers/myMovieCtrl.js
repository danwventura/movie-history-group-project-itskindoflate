app.controller("myMovieCtrl", function($scope, $location, OMDBFactory){

  $scope.myMovieArray = [];

  function myMovieList(){
      OMDBFactory.getMoviesFromApi().then(function(myMoviesObject){
      console.log("moviesObject from factory promise", myMoviesObject);

    // $location.url('#/')
      $scope.myMovieArray = myMoviesObject;
      console.log("My Movie Array", $scope.myMovieArray );
  })
  }
 
 myMovieList();

});