//showAllWordsController

app.controller('showAllWordsController', function($scope,$http, $log,$location,topicMgmtAppConfig,WordMeaningServices) {
	$scope.wordObj={"title":"my word",
			"meaning":["meaning1"],
			"example":["example 1"]};
	
	$scope.wordList=[];
	
	
	$scope.fetchAllWordList=function(){
		$scope.wordList=[];
		
		WordMeaningServices
		.fetchAllWordList()
		.success(
				function(data) {
					// alert("Success : "+data);
					$scope.wordList = data;
					// $scope.sortBy($scope.propertyName);

					$log
					.log("Successfully fetched category list "
							+ " : "
							+ angular
							.toJson($scope.wordList));

				}).error(function(data) {
					$log.log("Error : " + data);
					// alert("Error : " + data);
				});
		
	};
	
	
	$scope.init=function(){
		$scope.fetchAllWordList();
	};
	
	$scope.init();
});