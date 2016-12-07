var variables = {
	firstDigit: 0,
	secondDigit: 0,
	operator: 0,
	answer: 0,
	dot: false,
	calcHistory: "",
	addCalcHistory: ""
}

function get(id){
	return document.getElementById(id);
}

//-clear all
function clearVariables(){
	variables.firstDigit = 0;
	variables.secondDigit = 0;
	variables.operator = 0;
	variables.answer = 0;
	variables.calcHistory = "";
	variables.addCalcHistory = "",
	variables.dot = false;
	get('answer').innerHTML = "0";
	get('addCalcHistory').innerHTML = "0"
	console.log('Calculator cleared!');
}	
	//Adding input numbers
function digits(digit){
	if(variables.operator ==0){
		if(variables.firstDigit == ""){
			variables.firstDigit = digit;
		}	else{
			variables.firstDigit += digit;
		}
		variables.calcHistory = variables.firstDigit;
		get('answer').innerHTML = variables.calcHistory;
	}	else{
		if(variables.secondDigit == ""){
			variables.secondDigit = digit;
		}	else{
			variables.secondDigit += digit;
		}
		variables.calcHistory = variables.firstDigit + variables.operator + variables.secondDigit;
		get('answer').innerHTML = variables.calcHistory;
	}
	variables.addCalcHistory = variables.addCalcHistory + digit;
	get('addCalcHistory').innerHTML = variables.addCalcHistory;
}

function setOperator(operatorinput){
	if (variables.operator == 0){
		variables.operator = operatorinput;
	}	else {
		makeCalculation();
		variables.operator = operatorinput;
	}
	variables.calcHistory = variables.firstDigit + variables.operator;
	get('answer').innerHTML = variables.calcHistory;
	variables.addCalcHistory += operatorinput;
	get('addCalcHistory').innerHTML = variables.addCalcHistory;
}

function dot() {
	if (variables.operator == 0) {
		variables.firstDigit += ".";
	variables.dot = true;
	}	else {
		variables.secondDigit += ".";
	variables.dot = true;
	}
	variables.addCalcHistory += ".";
	get('addCalcHistory').innerHTML = variables.addCalcHistory;
}

function makeCalculation(){
	variables.firstDigit = parseFloat(variables.firstDigit);
	variables.secondDigit = parseFloat(variables.secondDigit);

	if(variables.firstDigit == 0){

		if (variables.operator == '*') {
			variables.answer = 0;
		}		else if (variables.operator == '/') {
			variables.answer = 0;
		}		else if (variables.operator == '+') {
			variables.answer = variables.secondDigit;
		}		else if (variables.operator == '-') {
			variables.answer = -variables.secondDigit;
		}
	}
	else if(variables.secondDigit ==0){
		if(variables.operator == '*'){
			variables.answer = variables.firstDigit * variables.firstDigit
		}		else if(variables.operator == '/'){
			variables.answer = variables.firstDigit / variables.firstDigit;
		}		else if(variables.operator == '+'){
			variables.answer = variables.firstDigit + variables.firstDigit;
		}		else if(variables.operator == '-'){
			variables.answer = variables.firstDigit - variables.firstDigit; 
		}
	}else{
	
		if (variables.operator == '*') {
			if (variables.dot == true) {
				variables.answer = (variables.firstDigit *1000) * (variables.secondDigit *1000);
				variables.answer = variables.answer /1000000;
			}else {
				variables.answer = variables.firstDigit * variables.secondDigit;
			}
		}
		else if (variables.operator == '/') {
			if( variables.dot == true){
				variables.answer = (variables.firstDigit * 1000) / (variables.secondDigit * 1000);
				variables.answer = variables.answer / 1;
			}else {
				variables.answer = variables.firstDigit / variables.secondDigit;
			}
		}
		else if (variables.operator == '+') {
			if(variables.dot == true){
				variables.answer = (variables.firstDigit * 1000) + (variables.secondDigit * 1000);
				variables.answer = variables.answer / 1000;
			}else {
				variables.answer = variables.firstDigit + variables.secondDigit;
			}
		}
		else if (variables.operator == '-') {
			if(variables.dot == true){
				variables.answer = (variables.firstDigit * 1000) - (variables.secondDigit * 1000);
				variables.answer = variables.answer / 1000;
			}else {
				variables.answer = variables.firstDigit - variables.secondDigit;
			}
		}
	}
	get('answer').innerHTML = variables.answer;
	variables.firstDigit = variables.answer;
	variables.operator = 0;
	variables.secondDigit = 0;
	variables.addCalcHistory += "=";
	variables.addCalcHistory += variables.answer;
}