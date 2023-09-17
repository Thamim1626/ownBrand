let verifyUserNameMsg = document.getElementById("webHomePara");
var inputName = document.getElementById("webHomeInput");
verifyUserNameMsg.style.color = "green"

function nameVerifyBtn() {
    let inputNameValue = inputName.value;
    verifyUserNameMsg.textContent = "Hi " + inputNameValue + " , Welcome";
}