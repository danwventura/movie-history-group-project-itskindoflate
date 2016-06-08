app.controller("navAreaCtrl", function($scope, $location, NavFactory, FirebaseFactory, AuthFactory){

  $scope.loginStatus = NavFactory.getOnLogin();
  $scope.hideShowMovieSearch = false;
  $scope.myMovieArrayEmpty = true;
  $scope.watchedMovieArrayEmpty = true;
  $scope.hideShowWatchedMovieButton = true;
  $scope.pageTitle = null;
  $scope.omdbSearch = "";

  $scope.$watch(NavFactory.getMyMovieArrayEmpty, function() {
    $scope.myMovieArrayEmpty = NavFactory.getMyMovieArrayEmpty();
  });

  $scope.$watch(NavFactory.getWatchedMovieArrayEmpty, function() {
    $scope.watchedMovieArrayEmpty = NavFactory.getWatchedMovieArrayEmpty();
  });


  $scope.$watch(AuthFactory.getUser, function(newValue, oldValue) {
    if (newValue !== oldValue) {
      FirebaseFactory.getMoviesFromFirebase();
    }
  });

  $scope.$watch(NavFactory.getOnLogin, function(){
    $scope.loginStatus = NavFactory.getOnLogin();
  });

  $scope.$watch(NavFactory.getPageTitle, function(){
    $scope.pageTitle = NavFactory.getPageTitle();
  });

  $scope.$watch(NavFactory.getOnMyOrWatchedMovies, function(){
    $scope.hideShowMovieSearch = NavFactory.getOnMyOrWatchedMovies();
  });

  $scope.changeLocation = function() {
    if ($location.url !== "/") {
      $location.url("/");
      NavFactory.setOnMyOrWatchedMovies(false);
    }
  }

  $scope.updateOMDBSearchString = function(sentOMDBSearchString) {
    NavFactory.setOMDBSearchInput(sentOMDBSearchString);
  }



});

