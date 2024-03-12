const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit",formSubmit);
function formSubmit(event) {
    event.preventDefault();
    const userEmail = event.target.elements.email.value.trim();
    const userPassword = event.target.elements.password.value.trim();
    if (userEmail !== "" & userPassword !== "") {
        const user = {
            email: userEmail,
            password: userPassword
        }
        console.log(user);
        event.target.reset();
    } else {
        alert("All form fields must be filled in")
    }

}
