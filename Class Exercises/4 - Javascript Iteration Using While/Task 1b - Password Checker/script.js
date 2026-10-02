// Add your event listener and while loop code here
const button = document.getElementById('checkBtn');
const password = "letmein";

button.addEventListener('click', () => {
    passwordCheck();
});
// When the button is clicked, use a while loop to check the password until correct
function passwordCheck() {
    let pass = document.getElementById('passwordInput');
    while (pass != password) {
        document.getElementById('message').textContent = `Password is incorrect.`
        pass = document.getElementById('passwordInput');
    }

    document.getElementById('message').textContent = `Password is correct.`
}