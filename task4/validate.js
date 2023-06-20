var psychometric = document.getElementById("psychometricGrade")
var mechina = document.getElementById("mechinaGrade")
var eligibility = document.getElementById('eligibility');

function validate(bagrutScore, age) {
    if (!parseInt(bagrutScore)) {
        alert("You should enter a bagrut grade");
        return;
    }
    if (parseInt(age) > 30) {
        eligibility.innerHTML = "You are eligible for addmission to any faculty you choose";
        eligibility.classList.add('green');
    } else {
        eligibility.innerHTML = "";
        eligibility.classList.remove("green");
    }
}

function focusOnlyMechinaGrade() {
    mechina.disabled = false;
    psychometric.value = "";
    psychometric.disabled = true;
}

function focusOnlyPsychometricGrade() {
    psychometric.disabled = false;
    mechina.value = "";
    mechina.disabled = true;
}