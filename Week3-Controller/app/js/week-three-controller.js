angular.module('app')
.controller('WeekThreeController', ['$scope', function($scope) {
  $scope.weekThreeTitle = 'Week3';
}]);
app.controller("ParentCtrl", [ '$scope', function($scope){
    $scope.title = "I'm the Parent.";
 }]);

app.controller("ChildCtrl", [ '$scope', function($scope){
    $scope.title = "I'm the Child.";
}]);

app.controller('MyCtrl', function($scope, $http) {
  $http.get('phones.json')
       .then(function(res){
          $scope.phones = res.data;
        });
});