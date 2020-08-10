app.controller('resumeCtrl', function ($scope, $http) {

    $scope.Export = function () {
        html2canvas(document.getElementById('id-premendra-kumar-resume'), {
            onrendered: function (canvas) {
                var data = canvas.toDataURL();
                console.log(data);
                var docDefinition = {
                    content: [{
                        image: data,
                        width: 500
                    }]
                };
                pdfMake.createPdf(docDefinition).download("PremendraKumar.pdf");
            }
        });
    };

    $scope.onInit = function () {
        //$scope.loadSectionIfo();
    };

    $scope.onInit();

});
