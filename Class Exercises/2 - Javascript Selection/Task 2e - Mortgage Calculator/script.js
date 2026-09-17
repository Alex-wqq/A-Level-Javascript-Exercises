// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateMortgage);
});

// Function to calculate the mortgage details
function calculateMortgage() {
    // TODO: Get all input values
    let houseprice = parseFloat(document.getElementById('housePrice').value);
    let deposit = parseFloat(document.getElementById('deposit').value);
    let creditscore = parseFloat(document.getElementById('creditscore').value);
    let annualsalary = parseFloat(document.getElementById('annualSalary').value);
    let employmentstatus = document.getElementById('employmentStatus').value;
    // TODO: Calculate deposit percentage
    let depositpercentage = (deposit/houseprice) * 100;
    // TODO: Set base interest rate (3%)
    let interest = 1.03;
    // TODO: Adjust interest rate based on deposit percentage
    // 10-15%: Base rate + 2%
    // 16-25%: Base rate + 1%
    // Above 25%: Base rate
    if (depositepercentage >= 10 && depositpercentage <= 15){
        interest = interest + 0.02;
    } else if (depositepercentage >= 16 && depositepercentage < 25) {
        interest = interest + 0.01;
    } else {
        interest = interest;
    } 
    // TODO: Adjust interest rate based on credit score
    // Excellent (800-950): -0.5%
    // Good (700-799): No change
    // Fair (600-699): +0.5%
    // Poor (below 600): +1%
    if (creditscore >= 850 && creditscore <= 950) {
        interest = interest - 0.005;
    } else if (creditscore >= 700 && creditscore <=799) {
        interest = interest;
    } else if (creditscore >= 600 && creditscore <=699) {
        interest = interest + 0.005;
    } else if (creditscore < 600) {
        interest = interest + 0.01;
    }
    // TODO: Calculate maximum borrowing amount based on employment
    // Full-time: 4.5× salary
    // Self-employed: 4× salary
    // Part-time: 3.5× salary
    let borrow = 0
    if (employmentstatus == "fullTime") {
        borrow = annualsalary * 4.5;
    } else if (employmentstatus == "selfEmployed") {
        borrow = annualsalary * 4;
    } else if (employmentstatus == "partTime") {
        borrow = annualsalary * 3.5
    }
    // TODO: Calculate required loan amount (house price - deposit)
    let loan = houseprice - deposit
    // TODO: Check if loan amount is within acceptable limit
    let monthly = 0
    let monthlyinterest = interest/12
    let payments = 25*12
    if (loan >= borrow) {
        monthly = (loan(monthlyinterest(1+monthlyinterest)^payments))/((1 + monthlyinterest)^payments - 1)
    }
    // TODO: Calculate monthly payment using the formula:
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    // Where:
    // P = Monthly Payment
    // L = Loan Amount
    // c = Monthly Interest Rate (Annual Rate / 12)
    // n = Total Number of Payments (25 years × 12)
    
    // TODO: Calculate total amount repayable
    
    // TODO: Display all results
}
