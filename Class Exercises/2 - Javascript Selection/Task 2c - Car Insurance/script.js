// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let age = parseFloat(document.getElementById('age').value);
    let noClaims = parseFloat(document.getElementById('noClaims').value);
    let previousClaims = parseFloat(document.getElementById('previousClaims').value);
    // TODO: Calculate base premium (£500)
    const basePremium = 500;
    // TODO: Apply age adjustment
    // Under 25: +50%
    // 25-40: No change
    // Over 40: -15%
    if (age < 25) {
        let ageAdjustment = (500/2) + 500;
    } else if (age >= 25 && age <= 40) {
        let ageAdjustment = 500;
    } else {
        let ageAdjustment = 500 - 75;
    }
    // TODO: Apply no claims bonus
    // 0 years: No discount
    if (noClaims = 0) {
        let bonus = ageAdjustment
    }
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    
    // TODO: Display the final premium and the breakdown of calculations
}
