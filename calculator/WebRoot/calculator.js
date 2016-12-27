var calculatorApp = angular.module('calculatorApp', []);
calculatorApp.controller('calculatorCtrl', calculatorCtrl);
function calculatorCtrl($scope) {
	//output display
	$scope.output = "0";

	//check the number is current number
	$scope.newNumber = true;

	// the pending operation for calculator
	$scope.pendingOperation = null;

	// displaying a token shows the current operation
	$scope.operationToken = "";

	//the runningNuber is to calculate the result through adding, subtracting, dividing and Multiplying operation
	$scope.runningTotal = null;

	// the pending value  holds the last number or result
	$scope.pendingValue = null;

	// the last operation indicates the last operation
	$scope.lastOperation = null;
	
	var ADD = "adding";
	var SUBTRACT = "subtracting";
	var MULTIPLY = "multiplying";
	var DIVIDE = "dividing";
	var SQUARE = "squaring";
	var ADD_TOKEN = "+";
	var SUBTRACT_TOKEN = "-";
	var MULTIPLY_TOKEN = "*";
	var DIVIDE_TOKEN = "/";
	var SQUARE_TOKEN = "^";

	/*
	 * Updates the output display
	 */
	$scope.updateOutput = function(btn) {
		if ($scope.output == "0" || $scope.newNumber) {
			$scope.output = btn;
			$scope.newNumber = false;
		} else {
			$scope.output += String(btn);
		}
		$scope.pendingValue = toNumber($scope.output);
	};

	/*
	* add functionality
	*/
	$scope.add = function() {
		if ($scope.pendingValue) {
			if ($scope.runningTotal && $scope.pendingOperation == ADD) {
				$scope.runningTotal += $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SUBTRACT) {
				$scope.runningTotal -= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
				$scope.runningTotal *= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
				$scope.runningTotal /= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SQUARE) {
				$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			} else {
				$scope.runningTotal = $scope.pendingValue;
			}
		}
		setOperationToken(ADD);
		setOutput(String($scope.runningTotal));
		$scope.pendingOperation = ADD;
		$scope.newNumber = true;
		$scope.pendingValue = null;
	};

	/*
	* subtract functionality
	 */
	$scope.subtract = function() {
		if ($scope.pendingValue) {
			if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
				$scope.runningTotal -= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
				$scope.runningTotal += $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
				$scope.runningTotal *= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
				$scope.runningTotal /= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SQUARE) {
				$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			} else {
				$scope.runningTotal = $scope.pendingValue;
			}
		}
		setOperationToken(SUBTRACT);
		setOutput(String($scope.runningTotal));
		$scope.pendingOperation = SUBTRACT;
		$scope.newNumber = true;
		$scope.pendingValue = null;
	};

	/*
	 *  Multiply functionality
	 */
	$scope.multiply = function() {
		if ($scope.pendingValue) {
			if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
				$scope.runningTotal -= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
				$scope.runningTotal += $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
				$scope.runningTotal *= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
				$scope.runningTotal /= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SQUARE) {
				$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			} else {
				$scope.runningTotal = $scope.pendingValue;
			}
		}
		setOperationToken(MULTIPLY);
		setOutput(String($scope.runningTotal));
		$scope.pendingOperation = MULTIPLY;
		$scope.newNumber = true;
		$scope.pendingValue = null;
	};

	/*
	 * divide functionality
	  */
	$scope.divide = function() {
		if ($scope.pendingValue) {
			if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
				$scope.runningTotal -= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
				$scope.runningTotal += $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
				$scope.runningTotal *= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
				$scope.runningTotal /= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SQUARE) {
				$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			} else {
				$scope.runningTotal = $scope.pendingValue;
			}
		}
		setOperationToken(DIVIDE);
		setOutput(String($scope.runningTotal));
		$scope.pendingOperation = DIVIDE;
		$scope.newNumber = true;
		$scope.pendingValue = null;
	};

	/*
	 * square functionality
	  */
	$scope.square = function() {
		if ($scope.pendingValue) {
			if ($scope.runningTotal && ($scope.pendingOperation == SUBTRACT)) {
				$scope.runningTotal -= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == ADD) {
				$scope.runningTotal += $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == MULTIPLY) {
				$scope.runningTotal *= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == DIVIDE) {
				$scope.runningTotal /= $scope.pendingValue;
			} else if ($scope.runningTotal && $scope.pendingOperation == SQUARE) {
				$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			} else {
				$scope.runningTotal = $scope.pendingValue;
			}
		}
		setOperationToken(SQUARE);
		setOutput(String($scope.runningTotal));
		$scope.pendingOperation = SQUARE;
		$scope.newNumber = true;
		$scope.pendingValue = null;
	};

	//Sin functionality will implement in the next iteration
	$scope.sin = function() {
		alert("For next iteration.");
	}

	//Cos functionality will implement in the next iteration
	$scope.cos = function() {
		alert("For next iteration.");
	}

	//Tan functionality will implement in the next iteration
	$scope.tan = function() {
		alert("For next iteration.");
	}

	/*
	 * the calculate functionality shows the result in the output display
	 */
	$scope.calculate = function() {
		if (!$scope.newNumber) {
			$scope.pendingValue = toNumber($scope.output);
			$scope.lastValue = $scope.pendingValue;
		}
		if ($scope.pendingOperation == ADD) {
			$scope.runningTotal += $scope.pendingValue;
			$scope.lastOperation = ADD;
		} else if ($scope.pendingOperation == SUBTRACT) {
			$scope.runningTotal -= $scope.pendingValue;
			$scope.lastOperation = SUBTRACT;
		} else if ($scope.pendingOperation == MULTIPLY) {
			$scope.runningTotal *= $scope.pendingValue;
			$scope.lastOperation = MULTIPLY;
		} else if ($scope.pendingOperation == DIVIDE) {
			$scope.runningTotal /= $scope.pendingValue;
			$scope.lastOperation = DIVIDE;
		} else if ($scope.pendingOperation == SQUARE) {
			$scope.runningTotal = $scope.pendingValue * $scope.pendingValue;
			$scope.lastOperation = SQUARE;
		} else {
			if ($scope.lastOperation) {
				if ($scope.lastOperation == ADD) {
					if ($scope.runningTotal) {
						$scope.runningTotal += $scope.lastValue;
					} else {
						$scope.runningTotal = 0;
					}
				} else if ($scope.lastOperation == SUBTRACT) {
					if ($scope.runningTotal) {
						$scope.runningTotal -= $scope.lastValue;
					} else {
						$scope.runningTotal = 0;
					}
				} else if ($scope.lastOperation == MULTIPLY) {
					if ($scope.runningTotal) {
						$scope.runningTotal *= $scope.lastValue;
					} else {
						$scope.runningTotal = 0;
					}
				} else if ($scope.lastOperation == DIVIDE) {
					if ($scope.runningTotal) {
						$scope.runningTotal /= $scope.lastValue;
					} else {
						$scope.runningTotal = 0;
					}
				}
			} else {
				$scope.runningTotal = 0;
			}
		}

		setOutput($scope.runningTotal);
		setOperationToken();
		$scope.pendingOperation = null;
		$scope.pendingValue = null;
	};

	/* 
	 * clear the initalize number
	 */
	$scope.clear = function() {
		$scope.runningTotal = null;
		$scope.pendingValue = null;
		$scope.pendingOperation = null;
		setOutput("0");
	};

	/* 
	 * show the display output
	 */
	setOutput = function(outputString) {
		$scope.output = outputString;
		$scope.newNumber = true;
	};

	/* 
	 * put the the operation token into output display
	 */
	setOperationToken = function(operation) {
		if (operation == ADD) {
			$scope.operationToken = ADD_TOKEN;
		} else if (operation == SUBTRACT) {
			$scope.operationToken = SUBTRACT_TOKEN;
		} else if (operation == MULTIPLY) {
			$scope.operationToken = MULTIPLY_TOKEN;
		} else if (operation == DIVIDE) {
			$scope.operationToken = DIVIDE_TOKEN;
		} else if (operation == SQUARE) {
			$scope.operationToken = SQUARE_TOKEN;
		} else {
			$scope.operationToken = "";
		}
	};

	/* 
	 * Converts the string to number.
	 */
	toNumber = function(numberString) {
		var result = 0;
		if (numberString) {
			result = numberString * 1;
		}
		return result;
	};
}