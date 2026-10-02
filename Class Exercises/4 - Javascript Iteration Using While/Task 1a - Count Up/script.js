// Add your event listener and while loop code here
const button = document.getElementById('countBtn')
const output = document.getElementById('output')

button.addEventListener('click', () => {
    displayNumbers();
});

function displayNumbers() {
    let number = parseFloat(document.getElementById('numberInputco').value);
    let count = 0
    let result = '';

    while (count <= number) {
        result += count + '<br>';
        count++;
    }
    
    output.innerHTML = result;
}
// When the button is clicked, display numbers 1 to N in the output area using a while loop
