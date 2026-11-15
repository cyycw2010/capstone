let case1 = {description: `A 21 year old patient is presented to the 
    ER with fever, aches, and pains, as well as diarrhea and vomiting.`,
    disease: "Ebola", tests: {history: `Patient has been to Congo on 
        a volunteer program helping poverty-stricken communities<br>
        and returned to the United States two weeks ago.`,
    bloodtest: {
            "White Blood Cell": "2,800/µL",
            "Platelets": "85,000/µL",
            "Hemoglobin":"12.8 g/dL",
            "Sodium":"132 mmol/L",
            "Potassium":"3.2 mmol/L",
            "AST": "185 U/L",
            "ALT": "110 U/L",
            "Creatinine": "1.5 mg/dL",
            "Bilirubin":"1.8 mg/dL",
            "CRP": "Elevated",
            "EBOV NP rRT-PCR":"Positive"},
    bloodculture:`No bacterial growth`,
    hints:`High AST and ALT levels indicate liver damage.<br>
           Patient has recently been to Africa.<br>
           EBOV NP rRT-PCR stands for Ebola real-time reverse
           transcription PCR.`,
    diseaseDescription: `Ebola is a rare but serious disease 
    caused by Ebola virus. It can cause fever, fatigue, 
    gastrointestinal symptoms, and other complications`}
};
let case2 = {description: `A 44 year old patient presents to the ER with
    fever, chills, headaches, nausea, and decreased apetite.`, 
    disease: `Malaria`, tests: {history: `Patient returned from a trip
        Ghana ten days ago. Patient reports multiple bug bites.`, 
        bloodtest: {"WBC":"3800/µL",
                    "Hemoglobin":"11.2 g/dL",
                    "Platelets": "92,000/µL",
                    "Hemocrit": "34%",
                    "Sodium": "134 mmol/L",
                    "Potassium": "3.8 mmol/L",
                    "AST": "68 U/L",}}};
let cases = [case1];
let currentCase = cases[0];

function showTest(test) {
    let result = "<table>";

    for (let name in test) {
        result += `<tr><td>${name}</td><td align="right">${test[name]}</td></tr>`;
    }

    result += "</table>";
    return result;
};

const startCase = document.getElementById("startCase");
startCase.addEventListener("click", function(){
    document.getElementById("PatientOverview").innerHTML = currentCase.description;
});

const getPatientHistory = document.getElementById("GetHistory");
const historyResult = document.getElementById("PatientHistory");
getPatientHistory.addEventListener("click", function(){
    historyResult.innerHTML = currentCase.tests.history;
});

const bloodTest = document.getElementById("BloodTest");
const bloodTestResult = document.getElementById("BloodTestResult");
bloodTest.addEventListener("click", function(){
    bloodTestResult.innerHTML = showTest(currentCase.tests.bloodtest);
});

const hintsResult = document.createElement('p');
const gethints = document.createElement('button');
gethints.textContent = "Get extra hints"
hintsResult.textContent = "Hints will show here";
gethints.addEventListener("click", function(){
    hintsResult.innerHTML = currentCase.tests.hints;
});
bloodTest.after(hintsResult);
hintsResult.after(gethints);

const diseaseContainer = document.createElement("div");

const diseaseButton = document.createElement("button");
diseaseButton.textContent = "Learn About Disease";

const diseaseText = document.createElement("p");
diseaseText.textContent = "Disease description will appear here";

diseaseContainer.style.display = "none";

diseaseContainer.appendChild(diseaseButton);
diseaseContainer.appendChild(diseaseText);

diseaseContainer.style.marginLeft = "500px";

startCase.after(diseaseContainer);

const guessInput = document.getElementById("diagnosisGuess");
const submitGuess = document.getElementById("Guess");
const guessResult = document.getElementById("guessResult");

submitGuess.addEventListener("click", function() {
    if (guessInput.value.trim().toLowerCase() === currentCase.disease.toLowerCase()) {
        guessResult.textContent = "Correct diagnosis!";
        diseaseContainer.style.display = "inline-block";
    } 
    else {
        guessResult.textContent = "Incorrect. Try again!";
        guessInput.value = "";
    }
});

diseaseButton.addEventListener("click", function(){
    diseaseText.innerHTML = currentCase.diseaseDescription;
});

const reset = document.getElementById("NewCase");
reset.addEventListener("click", function(){
    document.getElementById("PatientOverview").innerHTML = `
    Patient Overview will show here. Press 'Start Case' to begin`
    historyResult.innerHTML = "Patient History will appear here";
    bloodTestResult.innerHTML = "Results of the Blood Test will show here";
    hintsResult.innerHTML = "Hints will show here";
    guessInput.value = "";
    guessResult.textContent = "Enter your guess to see result";
    diseaseText.innerHTML = `Disease description will appear here`;
    diseaseContainer.style.display = "none";
});
  