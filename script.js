const sliderVal = document.querySelector(".slider");
const passLength = document.querySelector(".length");
const uppercaseCheckbox = document.querySelector("#uppercase");
const lowercaseCheckbox = document.querySelector("#lowercase");
const numbersCheckbox = document.querySelector("#numbers");
const symbolsCheckbox = document.querySelector("#symbols");
const generateButton = document.querySelector(".generate-btn");
const displayPassword = document.querySelector(".display");
const currPasswordStrength = document.querySelector(".curr-strength");
const strengthIndicator = document.querySelectorAll(".val");
const copyBtn = document.querySelector(".copy-btn");

var length = 10;
var characters = "";
var password = "";

sliderVal.oninput = function () {
    setLength();
};

sliderVal.addEventListener("input", () => {
    const tempSliderValue = sliderVal.value - 4;
    const progress = (tempSliderValue / 12) * 100;
    sliderVal.style.background = `linear-gradient(to right, #a5ffaf ${progress}%, #131217 ${progress}%)`;
});

function setLength() {
    length = sliderVal.value;
    passLength.innerHTML = length;
}

function isUppercaseChecked() {
    if (uppercaseCheckbox.checked == 1) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}
function isLowercaseChecked() {
    if (lowercaseCheckbox.checked == 1) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
}
function isNumbersChecked() {
    if (numbersCheckbox.checked == 1) {
        characters += "0123456789";
    }
}
function isSymbolsChecked() {
    if (symbolsCheckbox.checked == 1) {
        characters += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }
}

function generateRamdonPassword() {
    for (let i = 0; i < length; i++) {
        console.log("entered loop");
        let randomNumber = Math.floor(Math.random() * characters.length);
        password += characters[randomNumber];
    }
}

function passwordStrengthIndicator() {
    if (length >= 4 && length < 8) {
        currPasswordStrength.innerText = "EASY";
        strengthIndicator[0].style.backgroundColor = "#f9cb63";
        strengthIndicator[0].style.border = "2px solid #f9cb63";
        strengthIndicator[1].style.backgroundColor = "#000";
        strengthIndicator[1].style.border = "2px solid #fff";
        strengthIndicator[2].style.backgroundColor = "#000";
        strengthIndicator[2].style.border = "2px solid #fff";
    } else if (length >= 8 && length <= 12) {
        currPasswordStrength.innerText = "MEDIUM";
        strengthIndicator[0].style.backgroundColor = "#f9cb63";
        strengthIndicator[0].style.border = "2px solid #f9cb63";
        strengthIndicator[1].style.backgroundColor = "#f9cb63";
        strengthIndicator[1].style.border = "2px solid #f9cb63";
        strengthIndicator[2].style.backgroundColor = "#000";
        strengthIndicator[2].style.border = "2px solid #fff";
    } else {
        currPasswordStrength.innerText = "STRONG";
        strengthIndicator[0].style.backgroundColor = "#f9cb63";
        strengthIndicator[0].style.border = "2px solid #f9cb63";
        strengthIndicator[1].style.backgroundColor = "#f9cb63";
        strengthIndicator[1].style.border = "2px solid #f9cb63";
        strengthIndicator[2].style.backgroundColor = "#f9cb63";
        strengthIndicator[2].style.border = "2px solid #f9cb63";
    }
}

generateButton.addEventListener("click", () => {
    isUppercaseChecked();
    isLowercaseChecked();
    isNumbersChecked();
    isSymbolsChecked();
    generateRamdonPassword();

    if(characters == ""){
        displayPassword.value = "";
        currPasswordStrength.innerText = "";
        strengthIndicator[0].style.backgroundColor = "#000";
        strengthIndicator[0].style.border = "2px solid #fff";
        strengthIndicator[1].style.backgroundColor = "#000";
        strengthIndicator[1].style.border = "2px solid #fff";
        strengthIndicator[2].style.backgroundColor = "#000";
        strengthIndicator[2].style.border = "2px solid #fff";
    }
    else{
        displayPassword.value = password;
        passwordStrengthIndicator();
    }
    password = "";
    characters = "";
    copyBtn.removeAttribute('disabled');
});

function copyPassword(){
    var copyText = document.querySelector('.display');
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyBtn.classList.add('active');
    setTimeout(()=>{
        copyBtn.classList.remove('active');
    }, 2000)
}

