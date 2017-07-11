(function () {
    'use strict';

    angular.module('fs-angular-toggle',[])
    .directive('fsToggle', function($location) {
        return {
            templateUrl: 'views/directives/template.html',
            restrict: 'E',
            transclude: true,
            scope: {
               selected: "@fsSelected"
            },
            link: function($scope, element, attrs) {

            }
        };
    });
})();