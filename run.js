var formInput = document.getElementById('input');

formInput.addEventListener('submit', function(event) {
    event.preventDefault();
    var dayValue= document.getElementById('day');
    var monthValue = document.getElementById('month');
    var yearValue = document.getElementById('year');
    let currentDate = new Date();

    if (dayValue.value === ""){
        DisplayError('day','day-label', 'invalid-day', "This field is required");
    }
    else if(dayValue.value > 31 || dayValue.value < 1 )
    {   
        DisplayError('day','day-label', 'invalid-day', "Must be a valid day");

    }
    else {
        clearError('day', 'day-label','invalid-day');

    }

    if (monthValue.value === ""){
        DisplayError('month','month-label', 'invalid-month', "This field is required");
    }
    else if(monthValue.value > 12 || monthValue.value < 1) {
        DisplayError('month','month-label', 'invalid-month', "Must be a valid month");
    }
    else {
        clearError('month', 'month-label','invalid-month');
    }

    if (yearValue.value === ""){
        DisplayError('year','year-label', 'invalid-year',  "This field is required");
    }
    else if (yearValue.value > 2023 || yearValue.value < 1900) {

        DisplayError('year','year-label', 'invalid-year', "Must be a valid year");

    }
    else {
        clearError('year', 'year-label','invalid-year');
    }

    if(yearValue.value == currentDate.getFullYear() && monthValue.value > currentDate.getMonth() ) {
        DisplayError('month','month-label', 'invalid-month', "Must be a valid month");
    }
    displayResult(monthValue.value,dayValue.value,yearValue.value);

});
// This function will put error for invalid input 
function DisplayError(elementId, elementLabelId, invalidLabelId, text) {
    let invalidDay = document.getElementById(invalidLabelId);
        document.getElementById(elementId).style.cssText = "border-color: red;";
        document.getElementById(elementLabelId).style.color = "red";
        invalidDay.innerText =text;
        invalidDay.style.cssText = "color: red; font-size: 11px; font-style: italic;  padding-top: 10px;";
}

// This function will clear error styling after the right input is given 
function clearError(elementId, elementLabelId, invalidLabelId) {
    let invalidDay = document.getElementById(invalidLabelId);
    document.getElementById(elementId).style.cssText = "border-color:  hsl(0, 0%, 71%);";
    document.getElementById( elementLabelId).style.color = "hsl(0, 1%, 44%)";
    invalidDay.innerText ="";
}



function displayResult(monthValue, dayValue, yearValue) {
    if(yearValue < 1900) return -1;
    const fullDate = yearValue + "-" + monthValue + "-" + dayValue; 
    const birthDate = new Date(fullDate);
    const currentDate = new Date();
    const timeDiff = currentDate - birthDate;
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    const remainingTimeDiff = timeDiff % (1000 * 60 * 60 * 24 * 365.25); 
    const months = Math.floor(remainingTimeDiff / (1000 * 60 * 60 * 24 * 30.44));   
    const remainingTimeDiff2 = remainingTimeDiff % (1000 * 60 * 60 * 24 * 30.44); 
    const days = Math.floor(remainingTimeDiff2 / (1000 * 60 * 60 * 24));

    if(years > 0 || months > 0 || days > 0) {
        document.getElementById("yearIn").innerText = years;
        document.getElementById("monthIn").innerText = months;
        document.getElementById("dayIn").innerText = days;
    }

}

