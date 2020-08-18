//addWordController

app.controller("words-reportsController", function (
	$scope,
	$http,
	$log,
	$location,
	topicMgmtAppConfig,
	$uibModal
) {
	$scope.wordReportObj = {
		isError: false,
		data: [
			{ count: 2, lastUpdatedOn: "09-Jul-2020" },
			{ count: 1, lastUpdatedOn: "07-Jul-2020" },
			{ count: 5, lastUpdatedOn: "15-Jun-2020" },
			{ count: 5, lastUpdatedOn: "14-Jun-2020" },
			{ count: 49994, lastUpdatedOn: "09-Jan-2019" },
			{ count: 8102, lastUpdatedOn: "08-Jan-2019" },
		],
		message: "Success",
		timestamp: "2020-07-10T13:18:04.888+0000",
		status: 200,
	};

	/** METADATA Start */
	$scope.settings = {
		showAddNewWordSection: false,
		showEditWordSection: false,
		showSearchedItemsData: false,
		showAllWordsInPagination: true,
		sectionNames: {
			AddNewWord: "AddNewWord",
			SearchedWordItemData: "SearchedWordItemData",
		},
		wordTypes: [
			"noun",
			"pronoun",
			"adjective",
			"verb",
			"adverb",
			"preposition",
			"composition",
			"interrogation",
		],
	};

	$scope.stylesData = {
		templateParentDescriptionStyle: {
			padding: "5px",
		},
		templateSearchedWordDataDescriptionStyle: {
			color: "green",
			"font-size": "15px",
			padding: "5px",
			"border-style": "solid",
			"border-color": "green",
		},
	};

	$scope.executeQuery = function () {
		var urrrlll =
			"http://127.0.0.1:8080/word-meaning-db-backup-service/reports/datewise/LastUpdated";
		$scope.dynamicQueryResponse = {};
		$scope.dynamicTableData = [];
		$scope.showDynamicTableData = false;
		$scope.showDynamicResponseError = false;
		$http({
			method: "GET",
			url: urrrlll,
			//data : $scope.dynamicQueryRequestObject
		})
			.success(function (data) {
				$scope.dynamicQueryResponse = data;
				$scope.dynamicTableData = $scope.dynamicQueryResponse.data;
				$scope.showDynamicTableData = true;
				$scope.showDynamicResponseError = false;
			})
			.error(function (data, status) {
				//alert("Error : "+data.message +"status"+data.status);
				$scope.dynamicQueryResponse = data;
				$scope.showDynamicResponseError = true;
			});
	};

	$scope.executeQuery = function () {
		var urrrlll =
			"http://127.0.0.1:8080/word-meaning-db-backup-service/reports/datewise/LastUpdated?columnName=CREATEDON";
		$scope.dynamicQueryResponse = {};
		$scope.dynamicTableDataCreatedOn = [];
		$scope.showDynamicTableData = false;
		$scope.showDynamicResponseError = false;
		$http({
			method: "GET",
			url: urrrlll,
			//data : $scope.dynamicQueryRequestObject
		})
			.success(function (data) {
				$scope.dynamicQueryResponse = data;
				$scope.dynamicTableDataCreatedOn = $scope.dynamicQueryResponse.data;
				$scope.showDynamicTableData = true;
				$scope.showDynamicResponseError = false;
			})
			.error(function (data, status) {
				//alert("Error : "+data.message +"status"+data.status);
				$scope.dynamicQueryResponse = data;
				$scope.showDynamicResponseError = true;
			});
	};

	$scope.init = function () {
		$scope.executeQuery();
	};

	$scope.init();
});
