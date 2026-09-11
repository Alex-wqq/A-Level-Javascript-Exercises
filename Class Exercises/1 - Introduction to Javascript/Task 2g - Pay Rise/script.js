// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePayRise);

function calculatePayRise() {
    // TODO:
    // 1. Get the current salary, months back dated, and pay rise percentage
    let salary = parseFloat(document.getElementById('currentSalary').value);
    let months = parseFloat(document.getElementById('months').value);
    let percentage = parseFloat(document.getElementById('percentage').value);
    // 2. Calculate:
    //    - New annual salary (current salary + percentage increase)
    const increase = salary * percentage;
    const newSalary = salary + increase;
    //    - Back pay (difference in monthly salary × number of months)
    const difference = newSalary * months;
    // 3. Display both results formatted to 2 decimal places
    document.getElementById('newSalary').textContent = newSalary;
    document.getElementById('backPay').textContent = difference;
}
