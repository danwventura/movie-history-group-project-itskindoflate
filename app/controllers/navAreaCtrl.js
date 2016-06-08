app.controller("navAreaCtrl", function($scope, $location, NavFactory){

  $scope.loginStatus = NavFactory.getOnLogin();
  $scope.hideShowMovieSearch = false;
  $scope.pageTitle = null;
  $scope.omdbSearch = "";

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

