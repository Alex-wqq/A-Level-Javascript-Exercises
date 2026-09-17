// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', comparePlans);
});

// Function to compare different phone plans
function comparePlans() {
    // TODO: Get usage values from inputs
    let mins = parseFloat(document.getElementById('minutes').value);
    let text = parseFloat(document.getElementById('texts').value);
    let dataAmount = parseFloat(document.getElementById('data').value);
    let contract = parseFloat(document.getElementById('contract').value);
    
    // TODO: Define plan limits and costs
    const plans = {
        basic: {
            name: "Basic Plan",
            cost: 15,
            minutes: 500,
            texts: "unlimited",
            data: 2
        },
        standard: {
            name: "Standard Plan",
            cost: 25,
            minutes: 1000,
            texts: "unlimited",
            data: 10
        },
        premium: {
            name: "Premium Plan",
            cost: 35,
            minutes: "unlimited",
            texts: "unlimited",
            data: 50
        },
        ultimate: {
            name: "Ultimate Plan",
            cost: 45,
            minutes: "unlimited",
            texts: "unlimited",
            data: "unlimited"
        }
    };
    
    // TODO: Calculate costs for each plan including overages
    // Extra minutes: 10p per minute
    // Extra data: £5 per GB

    let extraM = 0;
    let extraD = 0;
    let price = 0;
    
    if (plan == "Basic Plan") {
        extraM = mins - minutes;
        extraD = dataAmount - data;
        if (extraM >= 0) {
            price = 0.10 * extraM;
        }
        if (extraD >0) {
            price = 5 * extraD;
        }
        price = price + cost;
    }

        
    if (plan == "Standard Plan") {
        extraM = mins - minutes;
        extraD = dataAmount - data;
        if (extraM >= 0) {
            price = 0.10 * extraM;
        }
        if (extraD >0) {
            price = 5 * extraD;
        }
        price = price + cost;
    }

    if (plan == "Premium Plan") {
        extraM = mins - minutes;
        extraD = dataAmount - data;
        if (extraM >= 0) {
            price = 0.10 * extraM;
        }
        if (extraD >0) {
            price = 5 * extraD;
        }
        price = price + cost;
    }

    if (plan == "Unlimited Plan") {
        extraM = mins - minutes;
        extraD = dataAmount - data;
        if (extraM >= 0) {
            price = 0.10 * extraM;
        }
        if (extraD >0) {
            price = 5 * extraD;
        }
        price = price + cost;
    }
    // TODO: Apply contract length discounts
    // 24 months: 10% off
    // 36 months: 15% off

    if (contract == '24') {
        price = price * 0.9;
    } else if (contract == '36') {
        price = price * 0.85;
    }
    
    // TODO: Determine the most cost-effective plan
    
    // TODO: Display comparison of all plans
    
    // TODO: Show recommendation with potential savings
}
