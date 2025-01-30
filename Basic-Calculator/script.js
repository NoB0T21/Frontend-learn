let currentInput = "";

function click0(value) {
    if (value === "AC"){
        currentInput = '';
    } else{
        currentInput += value;
    }
    updateDisplay();
}

function calculate() {
    let parts = currentInput.split(/(\+|\-|\*|\/)/);
    let result = parseFloat(parts[0]);

    for (let i = 1; i <= parts.length; i++) {
        let operator = parts[i];  
        let nextNumber = parseFloat(parts[i + 1]);
        
        
        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        } else if( operator === '*') {
            result *= nextNumber;
        }else if( operator === '/') {
            result /= nextNumber;
        } 
        i++;
    }
    currentInput = result;
    updateDisplay()
}

function updateDisplay() {
    document.getElementById("display").textContent = currentInput;
}






let currentInput1 = "";

function click1(value) {
    if (value === "AC"){
        currentInput1 = '';
    } else{
        currentInput1 += value;
    }
    updateDisplay1();
}

function calculate1() {
 try{
     currentInput1 = eval(currentInput1);;
     updateDisplay1()
 } catch (error){
    currentInput1 = 'Error';
 }
}

function updateDisplay1() {
    document.getElementById("display2").textContent = currentInput1;
}