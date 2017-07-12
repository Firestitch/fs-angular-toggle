'use strict';


angular.module('app')
  .controller('DemoCtrl', function ($scope) {

    $scope.list = [
    {
    	id: 1,
    	name: 'Ray',
    	icon: 'sentiment_satisfied'
    },
    {
    	id: 2,
    	name: 'Jim',
    	icon: 'sentiment_neutral'
    },
    {
    	id: 3,
    	name: 'Billy',
    	icon: 'sentiment_dissatisfied'
    }];

    $scope.selected = $scope.list[0];
    $scope.selectedIcon = null;
    $scope.selectedMultiple = [$scope.list[0],$scope.list[2]];

    $scope.submit = function() {
        alert('submit');
    }
});
