//addWordController

app
		.controller(
				'word-mgmt-dashboardController',
				function($scope, $http, $log, $location, topicMgmtAppConfig,$uibModal) {
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

					/** METADATA Start */
					$scope.settings = {
						"showAddNewWordSection" : false,
						"showEditWordSection" : false,
						"showSearchedItemsData" : false,
						"sectionNames" : {
							"AddNewWord" : "AddNewWord",
							"SearchedWordItemData" : "SearchedWordItemData"
						},
						"wordTypes":["noun","pronoun","adjective","verb","adverb","preposition","composition","interrogation"]
					};

					$scope.stylesData = {
						"templateParentDescriptionStyle" : {

							"padding" : "5px"

						},
						"templateSearchedWordDataDescriptionStyle" : {
							"color" : "green",
							"font-size" : "15px",
							"padding" : "5px",
							"border-style" : "solid",
							"border-color" : "green"
						}
					};
					
					$scope.pageFormData = {
							searchText : "",
							lastSearchedWord : "",
							templateAddWordData : {
								 "id": 431,
								 "word" : "zephyr",
								"unique_name": "zephyr",
								"type" : "noun",
								"details":"&#x3C;div class=&#x22;lW8rQd&#x22;&#x3E;&#x3C;div class=&#x22;vpx4Fd&#x22;&#x3E;&#x3C;div class=&#x22;pgRvse vdBwhd&#x22;&#x3E;&#x3C;em&#x3E;noun&#x3C;/em&#x3E;&#x3C;/div&#x3E;&#x3C;div class=&#x22;xpdxpnd vk_gy&#x22; data-mh=&#x22;-1&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;ol class=&#x22;eQJLDd&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;div class=&#x22;vmod&#x22;&#x3E;&#x3C;div class=&#x22;thODed Uekwlc XpoqFe&#x22;&#x3E;&#x3C;div data-topic=&#x22;&#x22;&#x3E;&#x3C;div&#x3E;1.&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x3C;div class=&#x22;QIclbb XpoqFe&#x22;&#x3E;&#x3C;div&#x3E;&#x3C;span class=&#x22;mQo3nc hsL7ld&#x22;&#x3E;LITERARY&#x3C;/span&#x3E;&#x3C;/div&#x3E;&#x3C;div data-dobid=&#x22;dfn&#x22;&#x3E;a soft gentle breeze.&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;div class=&#x22;vmod&#x22;&#x3E;&#x3C;div class=&#x22;thODed Uekwlc XpoqFe&#x22;&#x3E;&#x3C;div data-topic=&#x22;&#x22;&#x3E;&#x3C;div&#x3E;2.&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x3C;div class=&#x22;QIclbb XpoqFe&#x22;&#x3E;&#x3C;div&#x3E;&#x3C;span class=&#x22;mQo3nc hsL7ld&#x22;&#x3E;HISTORICAL&#x3C;/span&#x3E;&#x3C;/div&#x3E;&#x3C;div data-dobid=&#x22;dfn&#x22;&#x3E;a fine cotton gingham.&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/li&#x3E;&#x3C;/ol&#x3E;",
								"created_on": "2019-01-08T18:24:15.000+0000",
								"updated_on": "2019-01-08T18:24:15.000+0000",
								"last_read": "2019-01-08T18:24:15.000+0000",
								"meanings":[],
								"examples":[]
							},
							templateEditWordData : {
								 "id": 431,
								 "word" : "zephyr",
								"unique_name": "zephyr",
								"type" : "noun",
								"details":"&#x3C;div class=&#x22;lW8rQd&#x22;&#x3E;&#x3C;div class=&#x22;vpx4Fd&#x22;&#x3E;&#x3C;div class=&#x22;pgRvse vdBwhd&#x22;&#x3E;&#x3C;em&#x3E;noun&#x3C;/em&#x3E;&#x3C;/div&#x3E;&#x3C;div class=&#x22;xpdxpnd vk_gy&#x22; data-mh=&#x22;-1&#x22; aria-hidden=&#x22;true&#x22;&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;ol class=&#x22;eQJLDd&#x22;&#x3E;&#x3C;li&#x3E;&#x3C;div class=&#x22;vmod&#x22;&#x3E;&#x3C;div class=&#x22;thODed Uekwlc XpoqFe&#x22;&#x3E;&#x3C;div data-topic=&#x22;&#x22;&#x3E;&#x3C;div&#x3E;1.&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x3C;div class=&#x22;QIclbb XpoqFe&#x22;&#x3E;&#x3C;div&#x3E;&#x3C;span class=&#x22;mQo3nc hsL7ld&#x22;&#x3E;LITERARY&#x3C;/span&#x3E;&#x3C;/div&#x3E;&#x3C;div data-dobid=&#x22;dfn&#x22;&#x3E;a soft gentle breeze.&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x26;nbsp;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/li&#x3E;&#x3C;li&#x3E;&#x3C;div class=&#x22;vmod&#x22;&#x3E;&#x3C;div class=&#x22;thODed Uekwlc XpoqFe&#x22;&#x3E;&#x3C;div data-topic=&#x22;&#x22;&#x3E;&#x3C;div&#x3E;2.&#x3C;/div&#x3E;&#x3C;div&#x3E;&#x3C;div class=&#x22;QIclbb XpoqFe&#x22;&#x3E;&#x3C;div&#x3E;&#x3C;span class=&#x22;mQo3nc hsL7ld&#x22;&#x3E;HISTORICAL&#x3C;/span&#x3E;&#x3C;/div&#x3E;&#x3C;div data-dobid=&#x22;dfn&#x22;&#x3E;a fine cotton gingham.&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/li&#x3E;&#x3C;/ol&#x3E;",
								"created_on": "2019-01-08T18:24:15.000+0000",
								"updated_on": "2019-01-08T18:24:15.000+0000",
								"last_read": "2019-01-08T18:24:15.000+0000",
								"meanings":[],
								"examples":[]
							},
							searchedItems : []
						};

					$scope.showSection = function(sectionName,selection=true) {
						// alert('settings.showAddNewWordSection'+$scope.settings.showAddNewWordSection);

						$log.log("Going to show section : " + sectionName);
						if (sectionName != null) {
							if (sectionName === $scope.settings.sectionNames.AddNewWord) {
								if(selection){
									$scope.settings.showAddNewWordSection = true;
									$scope.settings.showSearchedItemsData = false;
								}else{
									
								}
								
							} else if (sectionName === $scope.settings.sectionNames.SearchedWordItemData) {
								$scope.settings.showAddNewWordSection = false;
								$scope.settings.showSearchedItemsData = true;
							} else {
								$log.log("invalid section name provided "
										+ sectionName);
							}
						} else {
							$log.log("Empty or null section name provided "
									+ sectionName);
						}
					};
					
					$scope.saveWordObj = function (wordObject){
						
						$log.log("$scope.groupObj : " + angular.toJson($scope.pageFormData.templateAddWordData));
						$http(
								{
									method : "POST",
									url : topicMgmtAppConfig.wordMeaningDbBackupService
											+ 'words',
									data : angular.toJson($scope.pageFormData.templateAddWordData)
								})
								.success(
										function(data) {
											if (data.status == "200") {
												$scope.pageFormData.templateAddWordData = data.data;
//												$scope.pageFormData.lastSearchedWord = searchTxt;
//												$scope
//														.showSection($scope.settings.sectionNames.SearchedWordItemData);
											} else if (data.status == "fail") {
												alert("Error : Message " + data.message + " data.status : " + data.status);
											}
										}).error(function(data) {
											alert("Error : " + data.message + "status" + data.status);
										});
					};
					
					$scope.updateWord =function (wordObjectForEdit){
						if(wordObjectForEdit){
							$scope.pageFormData.templateEditWordData=wordObjectForEdit;
							$log.log("Will open a modal popup to edit word : " + angular.toJson($scope.pageFormData.templateEditWordData));
							$scope.settings.showEditWordSection=true;
							$scope.titleOfEditWordDialog="Edit word : "+$scope.pageFormData.templateEditWordData.word;
//							$scope.pageFormData.templateEditWordData=wordObjectForEdit;
							
							$("#editWordDialog").dialog({
//			                    width: 500,
//			                    height: 200,
								title:$scope.titleOfEditWordDialog,
								minWidth: 400,
			                     minHeight: 'auto',
			                    resizable: true,
			                    autoOpen: true,
			                    dialogClass: 'no-close contentAlertDisplay',
			                    closeX: false,
			                    modal: true,
			                    closeOnEscape: false
			                    
			                });
						}						
						
					};
					
					$scope.updateWordObj=function (wordObjectForEdit){
						if(wordObjectForEdit){
							$scope.pageFormData.templateEditWordData=wordObjectForEdit;
							$log.log("going to edit word : " + angular.toJson($scope.pageFormData.templateEditWordData));
							$http(
									{
										method : "PUT",
										url : topicMgmtAppConfig.wordMeaningDbBackupService
												+ 'words',
										data : angular.toJson($scope.pageFormData.templateEditWordData)
									})
									.success(
											function(data) {
												if (data.status == "200") {
													$scope.pageFormData.templateAddWordData = data.data;
													$('#editWordDialog').dialog('close');
//													$scope.pageFormData.lastSearchedWord = searchTxt;
//													$scope
//															.showSection($scope.settings.sectionNames.SearchedWordItemData);
												} else if (data.status == "fail") {
													alert("Error : Message " + data.message + " data.status : " + data.status);
												}
											}).error(function(data) {
												alert("Error : " + data.message + "status" + data.status);
											});
						}
					};

					

					$scope.search = function(searchTxt) {

						$scope.pageFormData.searchedItems = [];

						$http(
								{
									method : "GET",
									url : topicMgmtAppConfig.wordMeaningDbBackupService
											+ 'words',
									params : {
										name : searchTxt
									}
								})
								.success(
										function(data) {
											if (data.status == "200") {
												$scope.pageFormData.searchedItems = data.data;
												$scope.pageFormData.lastSearchedWord = searchTxt;
												$scope
														.showSection($scope.settings.sectionNames.SearchedWordItemData);
											} else if (data.status == "fail") {
												alert("Error : Message " + data.message + " data.status : " + data.status);
											}
										}).error(function(data) {
											alert("Error : " + data);
										});
					};

				});