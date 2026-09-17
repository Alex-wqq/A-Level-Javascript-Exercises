// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateBill);
});

// Function to calculate the restaurant bill
function calculateBill() {
    // TODO: Get all input values
    let foodTotal = parseFloat(document.getElementById('foodTotal').value);
    let drinksTotal = parseFloat(document.getElementById('drinksTotal').value);
    let diners = parseFloat(document.getElementById('diners').value);
    let kidsCount = parseFloat(document.getElementById('kidsCount').value);
    let loyalty = document.getElementById('loyaltyCard').value
    
    let totalPeople = diners + kidsCount;

    // TODO: Calculate service charge based on group size
    // 1-4: No mandatory charge
    // 5-8: 10%
    // 8+: 15%
    let charge = 0
    if (totalPeople >=1 && totalPeople <= 4) {
        charge = charge
    } else if (totalPeople >= 5 <8) {
        charge = 1.10
    } else {
        charge = 1.15
    }
    // TODO: Apply time-based discounts
    // Before 5 PM: 20% off food
    // 5-7 PM: 25% off drinks
    // After 10 PM: 10% off total

    let totalPrice = 0;
    let time = document.getElementById('time');

    if (time < '17:00') {
        totalPrice = (foodTotal * 0.80) + drinksTotal;
    } else if (time >= '17:00' && time <= '19:00') {
        totalPrice = foodTotal + (drinksTotal * 0.75);
    } else if (time > '22:00') {
        totalPrice = (foodTotal + drinksTotal) * 0.90;
    }

    // TODO: Apply special offers
    // Mon-Thu: Second main half price
    // Sunday: Kids eat free (max 2 per adult)
    let day = document.getElementById('day');
    let kidsPerAdult = kidsCount % diners;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday") {
        totalPrice = totalPrice - (foodTotal/2);
    } if (day == "Sunday") {
        totalPrice = totalPrice - (foodTotal/kidsPerAdult);
    }
    
    
    // TODO: Apply loyalty card discount
    // Bronze: 5% off
    // Silver: 10% off
    // Gold: 15% off
    if (loyalty == "bronze") {
        totalPrice = totalPrice *0.95;
    } else if (loyalty == "silver") {
        
    }

    // TODO: Calculate subtotal
    
    // TODO: Create breakdown of all discounts applied
    
    // TODO: Calculate and display final total
}
