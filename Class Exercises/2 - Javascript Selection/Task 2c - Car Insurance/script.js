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
        let final = (basePremium/2) + basePremium;
    } else if (age >= 25 && age <= 40) {
        let final = basePremium
    } else {
        let final = basePremium - 75;
    }
    if (noClaims == 1 || noClaims == 2) {
        let fin = final * 1.10;
    } else if (noClaims >= 3 && noClaims < 6) {
        let fin = final * 1.25;
    } else if (noClaims > 5) {
        let fin = final * 1.35;
    } else {
        let fin = final
    }
    let totalClaims = 1.20 ** previousClaims
    let finish = fin * totalClaims
    // TODO: Apply no claims bonus
    // 0 years: No discount
    // 1-2 years: 10% discount
    // 3-5 years: 25% discount
    // Over 5 years: 35% discount
    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    
    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('result').textcontent = "The final premium amount is " + finish ;
}
