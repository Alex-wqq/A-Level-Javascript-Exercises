// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateOrder);

function calculateOrder() {
    // TODO:
    // 1. Get the order number and quantity from the input fields
    let number = parseFloat(document.getElementById('orderNumber').value)
    let quantity = parseFloat(document.getElementById('quantity').value)
    // 2. Calculate the total cost (£2.45 per bag)
    let cost = quantity * 2.45
    // 3. Display:
    //    - Order number
    document.getElementById('displayOrderNumber').textContent = number
    //    - Quantity
    document.getElementById('displayQuantity').textContent = quantity
    //    - Total cost (format to 2 decimal places)
    document.getElementById('totalCost').textContent = cost.toFixed(2)
}
