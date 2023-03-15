// output
const outputPounds = document.getElementById("outputPounds");
const outputKG = document.getElementById("outputKG");

function convertKGToPound(kg){
    // converting
    let pound = kg*2.2046;
    // rounding the value
    pound = pound.toFixed(0);
    // displaying the result
    outputPounds.innerHTML = pound;
}

function convertPoundToKG(pound){
    // converting
    let kg = pound / 2.2046;
    // rounding
    kg = kg.toFixed(0);
    // displaying the result
    outputKG.innerHTML = kg; 
}