//labelController

app.controller('labelController', function ($scope, $http, $location,
    $log, topicMgmtAppConfig, TopicManagementServices, eventGroupMgmtServices,
    EventGroupManagementServices) {


    $scope.eventGroupListItems = eventGroupMgmtServices.eventGroupListItems;
    $scope.eventListItems = eventGroupMgmtServices.eventListItems;
    $scope.labelList = [];

    $scope.topicObj = {
        "title": "",
        "description": "",
        "personal": false,
        "rating": 1
    };

    $scope.getAllLabel = function () {
        EventGroupManagementServices.getAllLabel()
            .success(function (data) {
                $scope.labelList = data;
                $log.log('All Label : ' + angular
                    .toJson(data));
            })
            .error(function (data) {
                $log.log("Error : " + angular
                    .toJson(data));
            });
    };

    var initialTopicObj = {};

    $scope.maxRatingValue = TopicManagementServices.maxTopicMgmtRatingValue;


    $scope.onInit = function () {

        console.log('starting label controller-->>>>>>>>>>>>>>>>>>>>>!');
        $scope.getAllLabel();
    }();

    //$scope.onInit();

});
