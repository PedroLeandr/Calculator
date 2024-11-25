const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const subtract = document.getElementById("subtract");
const add = document.getElementById("add");
const equals = document.getElementById("equals");
const dot = document.getElementById("dot");
const remove = document.getElementById("remove");
const clear = document.getElementById("clear");

const visor = document.getElementById("visor")
const container = document.getElementById("Container");

let value = 0;

one.onclick = function(){
    value += "1";
    visor.textContent = value;
}

two.onclick = function(){
    value += "2";
    visor.textContent = value;
}

three.onclick = function(){
    value += "3";
    visor.textContent = value;
}

four.onclick = function(){
    value += "4";
    visor.textContent = value;
}

five.onclick = function(){
    value += "5";
    visor.textContent = value;
}

six.onclick = function(){
    value += "6";
    visor.textContent = value;
}

seven.onclick = function(){
    value += "7";
    visor.textContent = value;
}

eight.onclick = function(){
    value += "8";
    visor.textContent = value;
}

nine.onclick = function(){
    value += "9";
    visor.textContent = value;
}

zero.onclick = function() {
    if (value === "" || value == "0") {
        value = "0";
    } else {
        value += "0";
    }
    visor.textContent = value;
};

multiply.onclick = function(){
    value += "*";
    visor.textContent = value;
}

divide.onclick = function(){
    value += "/";
    visor.textContent = value;
}

add.onclick = function(){
    value += "+";
    visor.textContent = value;
}

subtract.onclick = function(){
    value += "-";
    visor.textContent = value;
}

dot.onclick = function(){
    value += ".";
    visor.textContent = value;
}

equals.onclick = function(){
    try {
        value = eval(value);
        visor.textContent = value;
    } catch (e) {
        visor.textContent = "Error";
        value = "0";
    }
}

remove.onclick = function(){
    if(value == "0"){
        value = "0";
    }
    else{
        value = value.slice(0, -1);
    }
    visor.textContent = value;
}

clear.onclick = function(){
    value = "0";
    visor.textContent = value
}