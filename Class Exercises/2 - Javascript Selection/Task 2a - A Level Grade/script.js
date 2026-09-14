// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let comp1 = parseFloat(document.getElementById('comp1').value);
    let comp2 = parseFloat(document.getElementById('comp2').value);
    let comp3 = parseFloat(document.getElementById('comp3').value);
    let comp4 = parseFloat(document.getElementById('comp4').value);
    // TODO: Calculate the total marks
    const total = comp1 + comp2 + comp3 + comp4;
    // TODO: Calculate the percentage (total possible marks is 400)
    const percentage = (total/400) * 100;
    // TODO: Determine the grade based on the percentage
    // A: 80% or greater
    // B: 70% or greater
    // C: 60% or greater
    // D: 50% or greater
    // E: 40% or greater
    // U: Less than 40%
    if (percentage >= 80) {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was A`;
    } else if (percentage >= 70) {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was B`;
    } else if (percentage >= 60) {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was C`;
    } else if (percentage >= 50) {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was D`;
    } else if (percentage >= 40) {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was E`;
    } else {
        document.getElementById('result').textContent = `You're total percentage was ${percentage} and your grade was U`;
    }
    // TODO: Display the percentage and grade
}
