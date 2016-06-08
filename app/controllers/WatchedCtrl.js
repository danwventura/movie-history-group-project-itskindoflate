app.controller("WatchedCtrl", function($scope, FirebaseFactory, NavFactory){

  NavFactory.setOnLogin(false);
  NavFactory.setPageTitle("My Watched Movies");

  $scope.watchedMovies = FirebaseFactory.haveWatchedListArray;

});