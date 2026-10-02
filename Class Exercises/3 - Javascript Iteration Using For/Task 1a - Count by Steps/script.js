// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    const output = document.getElementById('sequenceOutput');
    
    // TODO: Validate inputs
    let start = parseFloat(document.getElementById('start').value);
    let end = parseFloat(document.getElementById('end').value);
    let step = parseFloat(document.getElementById('step').value);
    // Check if values are valid numbers

    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        output.innerHTML = "Check numbers are valid"
    }

    // Check if step is positive
    if (step < 0) {
        output.innerHTML = "Check step is positive"
    }
    // Check if end is greater than start
    if (end < start) {
        output.innerHTML = "Check end is greater or equal to start"
    }    
    // TODO: Create array to store sequence
    let sequence = [];
    
    // TODO: Use for loop with step to generate sequence
    // Remember to use the step in the for loop increment
    for (i = start; i <= end; i += step) {
        sequence.push(i + "=>");
    }

    output.innerHTML = sequence;
    
    // TODO: Display the sequence
    document.getElementById('output').textContent = 
    // Join the numbers with arrows between them
}

// Initialize the page
window.onload = function() {
    //generateSequence();
};
