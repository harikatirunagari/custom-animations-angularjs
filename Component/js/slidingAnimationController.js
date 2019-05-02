/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('customanimationApp',[]);

app.controller('slidingAnimationController',['$scope',function($scope){
    $scope.stylesForHeading = {
       'height':'100px', 
       'width':'100px',
       'background-color':'pink',
       'border':'10px solid #ccc',
       'padding':'20px',
       'margin-left':'20px'
   }
   console.log('in slidingAnimationController');
   
}]);


