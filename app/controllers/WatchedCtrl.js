app.controller("WatchedCtrl", function($scope, FirebaseFactory, NavFactory){

  NavFactory.setOnLogin(false);
  NavFactory.setOnMyOrWatchedMovies(true);
  NavFactory.setPageTitle("My Watched Movies");

  $scope.watchedMovies = FirebaseFactory.haveWatchedListArray;

  $scope.searchText = "";

  $scope.$watch(NavFactory.getMovieSearchInput, function(newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.searchText = NavFactory.getMovieSearchInput();
    }
  });

});
    