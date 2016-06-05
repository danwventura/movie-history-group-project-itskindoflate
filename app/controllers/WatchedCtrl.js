app.controller("WatchedCtrl", function($scope, FirebaseFactory){
  $scope.watchedMovies = FirebaseFactory.haveWatchedListArray;







});