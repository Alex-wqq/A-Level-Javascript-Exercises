// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    // TODO: Get the age and hours worked from the input fields
    let age = parseFloat(document.getElementById('age').value);
    let hours = parseFloat(document.getElementById('hours').value);
    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    if (age < 18) {
        let hourly = 4.85;
        const total = hours * hourly
        document.getElementById('result').textContent = "Your total pay is : £" + total;
    } else {
        let hourly = 6.35;
        const total = hours * hourly
        document.getElementById('result').textContent = "Your total pay is : £" + total;
    }
    // TODO: Calculate total pay
    
    // TODO: Display the hours worked and total amount earned
    
}
