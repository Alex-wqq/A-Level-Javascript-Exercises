// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    let adultTickets = parseFloat(document.getElementById('adultTickets').value);
    let childTickets = parseFloat(document.getElementById('childTickets').value);
    let seniorTickets = parseFloat(document.getElementById('seniorTickets').value);
    // TODO: Calculate base costs
    if (adultTickets >= 1) {
        var priceAdult = 12.00 * adultTickets ;
    } else if (childTickets >= 1) {
        var priceChild = 8.00 * childTickets;
    } else {
        var priceSenior = 7.50 * seniorTickets;
    }
    
    var price = priceAdult + priceChild + priceSenior;
    let totalTickets = adultTickets + childTickets + seniorTickets

    let day = document.getElementById('dayOfWeek').value;
    if (day == 'Friday' || day == 'Saturday' || day == 'Sunday'){
        price.value = 2.50 * price;
    } else {
        price.value = price;
    }

    let time = document.getElementById('showingTime');
    if (time < '17:00') {
        price.value = price - (totalTickets * 1.50);
    }

    let subtotal = price

    if (adultTickets == 2 && childTickets == 2) {
        price.value = price * 0.90
        var discount = '10%'
        document.getElementById('priceBreakdown').textContent = `${subtotal} * ${discount}`
        document.getElementById('subtotal').textContent = subtotal
        document.getElementById('discount').textContent = discount
        document.getElementById('finalTotal').textContent = price

    } else if (totalTickets >= 6) {
        price.value = price * 0.85
        discount = '15%'
        document.getElementById('priceBreakdown').textContent = `${subtotal} * ${discount}`
        document.getElementById('subtotal').textContent = subtotal
        document.getElementById('discount').textContent = discount
        document.getElementById('finalTotal').textContent = price

    }

    // Adult: £12.00
    // Child: £8.00
    // Senior: £7.50
    
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    
    // TODO: Calculate subtotal
    
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off
    
    // TODO: Display price breakdown, subtotal, any discounts, and final total
}
