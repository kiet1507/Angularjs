var myapp=angular.module('myApp',[])
myapp.controller('MyController',function ($scope) {
    $scope.data={
        "students": [

            {
                "id":"01",
                "name": "ABC",
                "age": 20
            },

            {
                "id":"02",
                "name": "EEE",
                "age": 23
            },
            {
                "id":"03",
                "name": "FFF",
                "age": 22
            }
        ],
        "books": [

            {
                "id":"01",
                "title": "C Programming",
                "price": 100
            },

            {
                "id":"02",
                "title": "Angular Programming",
                "price": 120
            }
        ],
        "films": [

            {
                "id":"01",
                "title": "Than Dieu Dai Hiep",
                "price": 120
            },

            {
                "id":"02",
                "title": "Anh Hung Xa Dieu",
                "price": 200
            }
        ]
    }
})