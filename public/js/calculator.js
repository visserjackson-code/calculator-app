const calculate = () => {

let num1 = parseInt(document.getElementById("num1").value); //user input
let num2 = parseInt(document.getElementById("num2").value); //user input
let operation = document.getElementById("operation").value; //user input (+, -, /, x)
   
if (operation == "+") {fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
}

else if (operation == "-") {
    fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
}

else if (operation == "*") {
    fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
} 
else if (operation == "/") {
    fetch(`/calculator/divide?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
}  
else {
    document.getElementById("result").innerHTML =
    `Error: Invalid operand! Try again.`
}    
}
