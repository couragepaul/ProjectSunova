


var app = angular.module('myApp',[]);
		app.config(['$qProvider', function ($qProvider) {
    		$qProvider.errorOnUnhandledRejections(false);
		}]);     
		

		app.controller('myController',function($scope,$http)
				{
					$http.get("https://mobiledev.sunovacu.ca/api/Values/GetCars")
					.then(function(response)
					{
						//console.log(response.data);
						$scope.dataArray = response.data;
						$scope.propertyName = 'Name';
						$scope.reverse = true;

						$scope.sortBy = function(propertyName){
							$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      							$scope.propertyName = propertyName;
						};
					});			
					
				}
		);
		