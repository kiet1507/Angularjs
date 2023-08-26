var ngApp = angular.module('myNgApp', []);
ngApp.controller('studentController', function ($scope) {
    $scope.student = {
        firstName: "aaa",
        lastName: "bbb",
        fees:500,
        subjects:[
            {name:'Physics',marks:70},
            {name:'Cheistry',marks:80},
            {name:'Math',marks:65},
            {name:'Music',marks:55}
        ],
        fullName: function() {
            var s;
            s = $scope.student;
            return s.firstName + " " + s.lastName;
        }
    };
});