// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCommission);

function calculateCommission() {
    // TODO:
    // 1. Get all invoice numbers and amounts from the input fields
    let invoice1 = parseFloat(document.getElementById('invoice1').value);
    let invoice2 = parseFloat(document.getElementById('invoice2').value);
    let invoice3 = parseFloat(document.getElementById('invoice3').value);
    // 2. Calculate:
    //    - Total sales amount
    const totalSale = invoice1 + invoice2 + invoice3
    //    - Commission (20% of total sales)
    const commission = totalSale * 0.20
    // 3. Display:
    //    - Each sale's details
    document.getElementById('amount1').textContent = invoice1.toFixed(2)
    document.getElementById('amount2').textContent = invoice2.toFixed(2)
    document.getElementById('amount3').textContent = invoice3.toFixed(2)
    //    - Total sales amount
    document.getElementById('totalSales').textContent = totalSale.toFixed(2)
    //    - Commission earned
    document.getElementById('commission').textContent = commission.toFixed(2)
    // Note: Format all monetary values to 2 decimal places
}
