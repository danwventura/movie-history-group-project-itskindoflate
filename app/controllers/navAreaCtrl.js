app.controller("navAreaCtrl", function($scope, $location, NavFactory){

  $scope.loginStatus = NavFactory.getOnLogin();
  $scope.pageTitle = null;
  $scope.omdbSearch = "";

  $scope.$watch(NavFactory.getOnLogin, function(){
    $scope.loginStatus = NavFactory.getOnLogin();
  });

  $scope.$watch(NavFactory.getPageTitle, function(){
    $scope.pageTitle = NavFactory.getPageTitle();
  });

  $scope.changeLocation = function() {
    if ($location.url !== "/") {
      $location.url("/");
    }
  }

  $scope.updateOMDBSearchString = function(sentOMDBSearchString) {
    NavFactory.setOMDBSearchInput(sentOMDBSearchString);
  }



});

