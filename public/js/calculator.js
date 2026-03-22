let num1; //user input
let num2; //user input
let operation; //user input (+, -, /, x)
   
if (operation === "+") {fetch(`/calculator/add?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
}

else if (operation === "+") {
    fetch(`/calculator/subtract?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
}

else if (operation === "x" || operation === "*") {
    fetch(`/calculator/multiply?num1=${num1}&num2=${num2}`)
.then(response => response.json())
.then(data => {
document.getElementById("result").innerHTML = data.result;
});
} 
else if (operation === "/") {
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

