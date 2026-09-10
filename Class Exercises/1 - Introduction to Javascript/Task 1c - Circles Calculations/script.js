// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    // TODO:
    // 1. Get the radius value from the input field
    let radius = parseFloat(document.getElementById('radius').value)
    // 2. Calculate:
    //    - Circumference using the formula: 2 * π * radius
    let circumference = radius * 2 * Math.PI
    //    - Area using the formula: π * radius^2
    let area = Math.PI * radius ** 2
    // 3. Display both results in their respective span elements
    document.getElementById('circumference').textContent = `The circumference is: ${circumference}`
    document.getElementById('area').textContent = `The area is: ${area}`
    // Note: Use Math.PI for the value of π
}
