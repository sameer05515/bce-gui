//addWordController

app
		.controller(
				'word-mgmt-dashboardController',
				function($scope, $http, $log, $location, topicMgmtAppConfig) {
					$scope.wordObj = {
						"_id" : "5b6f9e8c89c9d3246c9dea72",
						"word" : "zephyr",
						"type" : "noun",
						"createdDate" : "2018-12-31T16:55:54.439+0000",
						"lastModified" : "2018-12-31T16:55:54.388+0000",
						"lastRead" : "2018-12-31T16:55:54.439+0000",
						"tags" : [ "1036-words-list" ],
						"readHistory" : [ "2018-12-31T16:55:54.439+0000" ],
						"meanings" : [ {
							"id" : 1,
							"meaning" : "a gentle breeze"
						} ],
						"examples" : [ {
							"id" : 1,
							"example" : "If not for the zephyrs that were blowing and cooling us, our room would've been unbearably hot."
						} ]
					};
					$scope.types = [ "noun", "pronoun", "adjective", "verb" ];
					
					/**METADATA Start */
					$scope.settings={
							"showAddNewWordSection":true,
							"showSearchedItemsData":true,
							"sectionNames":{
								"AddNewWord":"AddNewWord",
								"SearchedWordItemData":"SearchedWordItemData"
							}
					};
					
					
					$scope.stylesData={
							"templateParentDescriptionStyle": {
								
								"padding": "5px"
								
						   },
						   "templateSearchedWordDataDescriptionStyle": {
								"color": "green",
								"font-size": "15px",
								"padding": "5px",
								"border-style": "solid",
								"border-color": "green"
						   }
					};
					
					$scope.showSection= function(sectionName){
						if(!sectionName){
							if(sectionName==$scope.settings.sectionNames.AddNewWord){
								$scope.settings.showAddNewWordSection=true;
							}else if(sectionName==$scope.settings.sectionNames.SearchedWordItemData){
								$scope.settings.showAddNewWordSection=false;
								$scope.settings.showSearchedItemsData=true;
							}
						}
					};
					
					$scope.pageFormData={
							searchText:"",
							searchedItems:[]
					};
					
					$scope.search= function(searchTxt){
						
						$scope.pageFormData.searchedItems=[];
						
						$http({
                            method: "GET",
                            url: topicMgmtAppConfig.wordMeaningDbBackupService+'words',
                            params: {
                            	name: searchTxt
                            }
                        })
                        .success(function (data) {
                            /* $scope.fileNames = data;
												$scope.errorMessage = ""; */
                            if (data.status == "200") {
//                                alert(
//                                    "sucessfully moved file" +
//                                    fileKaPath +
//                                    " with name "+nayaMovingFileName+
//                                    " data.status : " +
//                                    data.status
//                                );
                            	
                            	$scope.pageFormData.searchedItems=data.data;
                            	$scope.showSection($scope.settings.sectionNames.SearchedWordItemData);
                            } else if (data.status == "fail") {
                                alert(
                                    "Error : Message " +
                                    data.message +
                                    " data.status : " +
                                    data.status
                                );
                            }
                        })
                        .error(function (data) {
                            alert("Error : " + data);
                        });
					};

					/*$scope.addNewMeaning = function() {
						var newItemNo = $scope.wordObj.meaning.length + 1;
						$scope.wordObj.meaning.push({
							"value" : ""
						});
					};*/

					/*$scope.removeMeaning = function() {
						var lastItem = $scope.wordObj.meaning.length - 1;
						$scope.wordObj.meaning.splice(lastItem);
					};*/

					// removeExample()
					/*$scope.addNewExample = function() {
						var newItemNo = $scope.wordObj.example.length + 1;
						$scope.wordObj.example.push({
							"value" : ""
						});
					};*/

					/*$scope.removeExample = function() {
						var lastItem = $scope.wordObj.example.length - 1;
						$scope.wordObj.example.splice(lastItem);
					};*/

					/*$scope.savewordObj = function() {
						$log.log("going to save word : "
								+ angular.toJson($scope.linkObj));

						WordMeaningServices.saveWord($scope.wordObj).success(
								function(data) {

									$location.path('/vocabulary');
								}).error(function(data, status) {
							$log.log("Error" + data);

						});
					};*/
				});