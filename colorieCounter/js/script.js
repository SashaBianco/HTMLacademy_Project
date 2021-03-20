var ageInput                =  document.getElementById('age');
var heightInput             =  document.getElementById('height');
var weightInput             =  document.getElementById('weight');
var submitButton            =  document.querySelector('.form__submit-button');
var resetButton             =  document.querySelector('.form__reset-button');
var activityRadioButtons    =  document.getElementsByName('activity');
var genderRadioButtons      =  document.getElementsByName('gender');
var summaryBlock           =  document.querySelector('section');
var inputElement            =  document.getElementsByClassName('input__wrapper');

var checkingEmptyFields =  function (elementsValue) {
    for (var i=1; i<elementsValue.length; i++) {
        if (elementsValue[i].checked) {
            elementsValue[i].checked = 'false';
        }  
    }
    elementsValue[0].checked = 'true';   
};

var resetValue = function () {
    ageInput.value = "";
    heightInput.value = "";
    weightInput.value = "";
    checkingEmptyFields(genderRadioButtons);
    checkingEmptyFields(activityRadioButtons); 
    summaryBlock.classList.add('counter__result--hidden');
    resetButton.setAttribute('disabled', 'disabled');
    submitButton.setAttribute('disabled', 'disabled');
};

var onlyNumbers = function () {
    for (var i=0; i<inputElement.length; i++) {
        var inputElementValue = inputElement[i].children[0].value;
        inputElementValue = inputElementValue.replace (/\D/g, '');
    }
};

var getCoefficient = function() {
    var x;
    var coefficient;
    for (var i = 0; i < activityRadioButtons.length; i++) {
        if (activityRadioButtons[i].checked) {
            x = i;
            break;
        }
    }
    switch (x) {
        case 0: 
            coefficient = 1.2;
            break;
        case 1: 
            coefficient = 1.375;
            break;
        case 2: 
            coefficient = 1.55;
            break;
        case 3: 
            coefficient = 1.725;
            break;
        case 4: 
            coefficient = 1.9;
            break;
        default:
            coefficient = 0;
            break;
    };
    return coefficient;
};

var calculationResults = function() {
    var maleRadioButton = document.getElementById('gender-male');
    var caloriesForWeightMaintain = (10 * weightInput.value)+ (6.25 * heightInput.value) - (5 * ageInput.value);
    var WeightSupport;

    if  (maleRadioButton.checked) {
        caloriesForWeightMaintain += 5;
    }   else {
        caloriesForWeightMaintain -= 161;
    }

    getCoefficient();
    WeightSupport = caloriesForWeightMaintain * getCoefficient();

    document.getElementById('calories-norm').innerHTML = Math.round(WeightSupport);
    document.getElementById('calories-minimal').innerHTML = Math.round(1.15 * WeightSupport);
    document.getElementById('calories-maximal').innerHTML = Math.round(0.85 * WeightSupport);
};  

var showResult = function () {
    calculationResults();
    summaryBlock.classList.remove('counter__result--hidden');
};

var calorieСounter = function () {
    onlyNumbers();
    if (ageInput.value == "" && heightInput.value == "" && weightInput.value == "") {
        resetButton.setAttribute('disabled', 'disabled');
    }   else {
        resetButton.removeAttribute('disabled');
        if (ageInput.value !== "" && heightInput.value !== "" && weightInput.value !== "") {
            submitButton.removeAttribute('disabled');
        }   else {
            submitButton.setAttribute('disabled', 'disabled');
        }
    }
};










