'use strict';
app.controller("LoginCtrl", function($scope, $rootScope, $location, firebaseURL, AuthFactory, NavFactory){

  NavFactory.setOnLogin(true);
  NavFactory.setPageTitle("");
  let ref = new Firebase(firebaseURL);

  $scope.account = {
    email: "",
    password: ""
  };

  if ($location.path() === '/logout'){
    ref.unauth();  //firebase method that kills token
    $rootScope.isActive = false;
  }

  $scope.register = () => {
    ref.createUser({
        email: $scope.account.email,
        password: $scope.account.password
    }, (error, userData) => {
          if(error){
          } else{
            $scope.login();
          }
        });
    };

 $scope.login = () => {
  AuthFactory
    .authenticate($scope.account)

    .then( () => {
      // $scope.hasUser =true;
      $location.path("/");
      $scope.$apply();
      $rootScope.isActive = true;
    });
 };

});