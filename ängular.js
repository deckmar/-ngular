var app = angular.module('ängular', []);

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

app.directive('ngUpprepa', function($compile) {
	return {
		restrict: 'A',
		scope: {
			ngUpprepa: '@'
		},
		link: function(scope, element, attr) {
			var elem = element[0];
			if (!scope.ngUpprepa) return;

			var upprepning = scope.ngUpprepa;
			var delar = upprepning.split(' ');
			if (delar.length < 3) return;
			if (delar[1] !== 'i') return;
			
			var variabelNamn = delar[0];
			var listUttryck = upprepning.substring(upprepning.indexOf(' i ')+3);

			scope.$watch(listUttryck, function(lista) {
				if (!lista) return;

				angular.forEach(lista, function(rad) {
					// ...
				});
			});

			throw "NotImplementedException";
		}
	}
})