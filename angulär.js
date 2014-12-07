var app = angular.module('angulär', []);

app.directive('ngVisa', function() {
	return {
		restrict: 'A',
		scope: {
			ngVisa: '='
		},
		link: function(scope, element, attr) {
			var elem = element[0];
			scope.$watch('ngVisa', function(newValue) {
				elem.style.visibility = newValue ? 'visible' : 'hidden';
			});
		}
	}
})