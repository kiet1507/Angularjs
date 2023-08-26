var ngApp = angular.module('myNgApp', []);

ngApp.controller('customerController',function($scope){
    $scope.customer={
        id:1,
        firstName:'aaa',
        lastName:'bbb',
        phone:[{data1:111},{data2:222},{data3:333},{data4:444}],
        
        fullName:function(){
            var i;
            i=$scope.customer;
            return i.firstName+ " " +i.lastName;
        }
    };
});