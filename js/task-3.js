const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", event => {
    const userName = event.currentTarget.value.trim();
    if (userName !== "") {   
    output.textContent = userName;
    } else {
        output.textContent = "Anonymous";
    }
});