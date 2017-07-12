
(function () {
    'use strict';

    angular.module('fs-angular-toggle',['fs-angular-theme'])
    .directive('fsToggle', function() {
        return {
            restrict: 'E',
            scope: {
               multiple: '@fsMultiple',
               width: '@fsWidth',
               model: '=fsModel'
            },
            controller: function($scope) {

            	if($scope.multiple) {
            		$scope.model = $scope.model || [];
            	}

            	this.$scope = $scope;
            }
        };
    })
    .directive('fsToggleOption', function(fsTheme) {
        return {
            template: '<div class="fs-toggle-option" ng-class="{ selected: selected }" ng-click="select()" ng-style="style"><md-icon ng-if="icon">{{icon}}</md-icon><span class="fs-toggle-option-template" ng-transclude></span></div>',
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
               value: '=fsValue',
               icon: '@fsIcon'
            },
	        require: '^fsToggle',
            link: function($scope, element, attrs, controller) {

            	$scope.style = {
            		backgroundColor: fsTheme.primaryHex(),
            		borderColor: fsTheme.primaryHex()
            	};

            	controller.$scope.$watch('model',function(model) {
            		if(model) {

            			if(controller.$scope.multiple) {
	        				$scope.selected = model.indexOf($scope.value)>=0;
	        			} else {
	        				$scope.selected = model == $scope.value;
	        			}
	        		}
	        	});

	        	if(controller.$scope.width) {
	        		$scope.style.minWidth = controller.$scope.width + 'px';
	        	}

	        	$scope.select = function() {

	        		$scope.selected = true;
                	if(controller.$scope.multiple) {
                		var index = controller.$scope.model.indexOf($scope.value);
                		if(index>=0) {
                			controller.$scope.model.splice(index,1);
                			$scope.selected = false;
                		} else {
                			controller.$scope.model.push($scope.value);
                		}

                	} else {
                		controller.$scope.model = $scope.value;
                	}
	        	}
            }
        };
    })
    .directive('fsToggleContainer', function($location) {
        return {
            restrict: 'E',
            link: function($scope, element, attrs) {
            	angular.element(element).addClass('fs-input-container');
            }
        };
    });
})();

angular.module('fs-angular-toggle').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/directives/toggle.html',
    "fs-angular template"
  );

}]);
