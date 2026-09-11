// Add event listener to the convert button
document.getElementById('convertBtn').addEventListener('click', convertToCentimeters);

function convertToCentimeters() {
    // TODO:
    // 1. Get the feet and inches values from the input fields
    let feet = parseFloat(document.getElementById('feet').value)
    let inches = parseFloat(document.getElementById('inches').value)
    // 2. Convert to centimeters using:
    //    - First convert feet to inches (1 foot = 12 inches)
    let tInches = (feet * 12) + inches
    //    - Then convert total inches to centimeters (1 inch = 2.54 cm)
    let centimeters = tInches * 2.54
    // 3. Display the result in the centimeters span element
    document.getElementById('centimeters').textContent = `${centimeters.toFixed(2)}`
}
