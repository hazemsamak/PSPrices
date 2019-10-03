// CONTROLLERS
weatherApp.controller("homeController", [
  "$scope",
  "$location",
  "$window",
  "$resource",
  "$http",
  function($scope, $location, $window, $resource, $http) {
    //    $http.get('movies.json').success(function (data){
    //        console.log('Data '+data);
    //        $scope.movies = data;
    //	});

    $scope.loading = true;
    $http
      .get("https://n0sr7golc1.execute-api.us-east-1.amazonaws.com/live")
      .success(function(data) {
        console.log("Data " + data[0]['image']);
        $scope.games = data;
        $scope.loading = false;
      });
  }
]);
