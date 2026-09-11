// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculatePay);

function calculatePay() {
    // TODO:
    // 1. Get all input values:
    //    - Standard hourly rate
    let hours = parseFloat(document.getElementById('standardRate').value);
    //    - Overtime rate
    let overtime = parseFloat(document.getElementById('overtimeRate').value);
    //    - Basic hours worked
    let basic = parseFloat(document.getElementById('basicHours').value);
    //    - Overtime hours worked
    let overtimeWorked = parseFloat(document.getElementById('overtimeHours').value);
    // 2. Calculate:
    //    - Basic pay (standard rate × basic hours)
    const basicpay = hours * basic;
    //    - Overtime pay (overtime rate × overtime hours)
    const overtimePay = overtime * overtimeWorked;
    //    - Total pay (basic pay + overtime pay)
    const total = basicpay + overtimePay;
    // 3. Display all amounts formatted to 2 decimal places
    document.getElementById('basicPay').textContent = basicpay.toFixed(2)
    document.getElementById('overtimePay').textContent = overtimePay.toFixed(2)
    document.getElementById('totalPay').textContent = total.toFixed(2)
}
