// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculate);

function calculate() {
    // TODO:
    // 1. Get the three numbers (A, B, C) from the input fields
    let num1 = parseFloat(document.getElementById('numberA').value);
    let num2 = parseFloat(document.getElementById('numberB').value);
    let num3 = parseFloat(document.getElementById('numberC').value);
    // 2. Calculate:
    //    - (A + B + C) / 3
    let average = (num1 + num2 + num3) / 3;
    //    - A × B × C
    let product = (num1 * num2 * num3);
    //    - A + (B × C)
    let expression = num1 + (num2 * num3);
    // 3. Display the results in the respective span element
    document.getElementById('average').textContent = `The average is: ${average}`;
    document.getElementById('product').textContent = `The product is: ${product}`;
    document.getElementById('expression').textContent = `The expression is: ${expression}`;
}