window.onload = function() {
	var tempInput = 0;
	var result = 0;
	var functionSymbol = '';
	var reset = "false"

	document.getElementById('ac').onclick = function() {
		result = tempInput = 0;
		document.getElementById('tempInput').value = "0";	
	}
	document.getElementById('btn-7').onclick = function () {
		dealWithNumberInput('7');
	}
	document.getElementById('btn-8').onclick = function () {
		dealWithNumberInput('8');
	}
	document.getElementById('btn-9').onclick = function () {
		dealWithNumberInput('9');
	}
	document.getElementById('btn-4').onclick = function () {
		dealWithNumberInput('4');
	}
	document.getElementById('btn-5').onclick = function () {
		dealWithNumberInput('5');
	}
	document.getElementById('btn-6').onclick = function () {
		dealWithNumberInput('6');
	}
	document.getElementById('btn-1').onclick = function () {
		dealWithNumberInput('1');
	}
	document.getElementById('btn-2').onclick = function () {
		dealWithNumberInput('2');
	}
	document.getElementById('btn-3').onclick = function () {
		dealWithNumberInput('3');
	}
	document.getElementById('btn-0').onclick = function () {
		dealWithNumberInput('0');
	}

	//functions *************************************
	document.getElementById('add').onclick = function() {
		calculateProcess(this.value, false);
	}

	document.getElementById('return').onclick = function() {
		calculateProcess(this.value, true);
	}

	function calculateProcess(value, isReset) {
		calculate();
		tempInput = 0;
		functionSymbol = value;
		reset = isReset;
		document.getElementById('result').value = result;
	}

	function calculate() {
		switch(functionSymbol) {
			case '+':
				result += tempInput;
				return;
			default:
				if(tempInput != 0)
					result = tempInput;
				
				return;
		}
	}
	function dealWithNumberInput(numberStr) {
		if(reset) {
			result = 0;
		}
		document.getElementById('result').value = tempInput == 0 || reset ? numberStr : document.getElementById('result').value + numberStr;
		tempInput = parseFloat(document.getElementById('result').value);
	}
}

