var ageElement      =  document.getElementById("age");
var heightElement   =  document.getElementById("height");
var weightElement   =  document.getElementById("weight");
var submitButton    =  document.querySelector(".form__submit-button");
var resetButton     =  document.querySelector(".form__reset-button");
var activity        =  document.getElementsByName('activity');
var gender          =  document.getElementsByName('gender');
var sectionElement  =  document.querySelector('section');
var inputElement    =  document.getElementsByClassName('input__wrapper');

var calorieСounter = function () {
    onlyNumbers();
    if (ageElement.value == "" && heightElement.value == "" && weightElement.value == "") {
        resetButton.setAttribute("disabled", "disabled");
    }   else {
        resetButton.removeAttribute('disabled');
        if (ageElement.value !== "" && heightElement.value !== "" && weightElement.value !== "") {
            submitButton.removeAttribute("disabled");
        }   else {
            submitButton.setAttribute("disabled", "disabled");
        };
    };
};

var resetValue = function () {
    ageElement.value = "";
    heightElement.value = "";
    weightElement.value = "";
    checkingEmptyFields(gender);
    checkingEmptyFields(activity); 
    sectionElement.classList.add('counter__result--hidden');
    resetButton.setAttribute("disabled", "disabled");
    submitButton.setAttribute("disabled", "disabled");
}

var checkingEmptyFields =  function (elementsValue) {
    for (var i=0; i<elementsValue.length; i++) {
        if (elementsValue[i].checked = 'true') {
            elementsValue[i].checked = 'false';
        };   
    };
    elementsValue[0].checked = 'true';   
} 


var showResult = function () {
    sectionElement.classList.remove('counter__result--hidden');
    calculationResults();
}

var onlyNumbers = function () {
    for (var i=0; i<inputElement.length; i++) {
        var inputElementValue = inputElement[i].children[0].value;
        inputElementValue = inputElementValue.replace (/\D/g, '');
    };
} 

var calculationResults = function() {
    var male = document.getElementById('gender-male');
    var N;
    var WeightSupport;
    var WeightGain;
    var WeightLoss;

    if  (male.checked) {
            N = (10 * weightElement.value)+ (6.25 * heightElement.value) - (5 * ageElement.value) + 5;
    }   else {
            N = (10 * weightElement.value) + (6.25 * heightElement.value) - (5 * ageElement.value) - 161;
    };

    getCoefficient();

    WeightSupport = Math.round(N * coefficient);
    WeightGain = Math.round((WeightSupport + (WeightSupport * 0.15)));
    WeightLoss = Math.round((WeightSupport - (WeightSupport * 0.15)));

    document.getElementById('calories-norm').innerHTML = WeightSupport;
    document.getElementById('calories-minimal').innerHTML = WeightGain;
    document.getElementById('calories-maximal').innerHTML = WeightLoss;
}    

var getCoefficient = function() {
    for (var i = 0; i < activity.length; i++) {
        var x;
        if (activity[i].checked) {
            x = i;
        };
    };

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
    };
    return coefficient;
}
