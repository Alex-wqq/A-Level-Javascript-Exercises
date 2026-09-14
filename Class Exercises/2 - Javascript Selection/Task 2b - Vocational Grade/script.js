// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
    // TODO: Get the theory and practical exam scores
    let theory  = parseFloat(document.getElementById('theory').value);
    let practical = parseFloat(document.getElementById('practical').value);
    // TODO: Check if both scores are above 50% (Pass requirement)
    if (theory > 50 && practical > 50) {
        const average = (theory + practical) / 2;
        let grade = (average > 70) ? "Distinction" : "Pass"
        document.getElementById('result').textContent = `Your average score was ${average} so you got a ${grade}`
    } else {
        const average = (theory + practical) / 2;
        document.getElementById('result').textContent = `Your average score was ${average} so you failed`;
    }
    // TODO: If passed, calculate average and check if above 70% (Distinction requirement)
    
    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    // Also display the average score
}
