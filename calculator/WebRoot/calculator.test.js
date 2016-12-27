(function(){
	'use strict';
	describe('calculator', function() {

		beforeEach(module('calculatorApp'));

		  var $controller;

		  beforeEach(inject(function(_$controller_){
		    $controller = _$controller_;
		  }));

		describe('add', function() {
			it('2 + 2 should equal 4', function() {
				var $scope = {};
				var controller = $controller('calculatorCtrl', {
					$scope : $scope
				});
				$scope.pendingOperation == "adding";
				$scope.runningTotal = 2;
				$scope.pendingValue = 2;
				$scope.calculate;
				expect($scope.runningTotal+$scope.pendingValue).toBe(4);
			});
		});
		
		describe('subtract', function() {
			it('2 - 2 should equal 0', function() {
				var $scope = {};
				var controller = $controller('calculatorCtrl', {
					$scope : $scope
				});
				$scope.runningTotal = 2;
				$scope.pendingValue = 2;
				$scope.calculate;
				expect($scope.runningTotal-$scope.pendingValue).toBe(0);
			});
		});
		
		describe('multiply', function() {
			it('2 * 2 should equal 4', function() {
				var $scope = {};
				var controller = $controller('calculatorCtrl', {
					$scope : $scope
				});
				$scope.runningTotal = 2;
				$scope.pendingValue = 2;
				$scope.calculate;
				expect($scope.runningTotal*$scope.pendingValue).toBe(4);
			});
		});
		
		describe('divide', function() {
			it('2 / 2 should equal 1', function() {
				var $scope = {};
				var controller = $controller('calculatorCtrl', {
					$scope : $scope
				});
				$scope.runningTotal = 2;
				$scope.pendingValue = 2;
				$scope.divide;
				expect($scope.runningTotal/$scope.pendingValue).toBe(1);
			});
		});
	})
}());
