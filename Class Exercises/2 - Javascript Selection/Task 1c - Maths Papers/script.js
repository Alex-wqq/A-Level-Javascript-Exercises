// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let paper1 = parseFloat(document.getElementById('paper1').value);
    let paper2 = parseFloat(document.getElementById('paper2').value);
    let paper3 = parseFloat(document.getElementById('paper3').value);
    // TODO: Calculate the total mark
    const totalmark = paper1 + paper2 + paper3;
    // TODO: Check if total is greater than 160
    if (totalmark > 160) {
        document.getElementById('result').textContent = `You passed. The total mark is: ${totalmark}`;
    } else {
        document.getElementById('result').textContent = `You failed. The total mark is: ${totalmark}`;
    }
    // TODO: Display the total mark and whether the student passed or failed
}
