'use strict';

function add(a1, b1) {
return a1 + b1;
}

function minus(a1, b1) {
return a1 - b1;
}

function multiply(a1, b1) {
return a1 * b1;
}

function divide(a1, b1) {
if (b1 == 0) {
return new Error("Can't divide by zero");
} else {
return a1 / b1;
}
}

function cero(a1,b1){
    a1=0;
    b1=0;


}

module.exports = {
	  add,
	  minus,
	  multiply,
      divide,
      cero
	}