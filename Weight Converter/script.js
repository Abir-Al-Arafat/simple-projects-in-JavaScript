// output
const outputPounds = document.getElementById("outputPounds");


function weightConverter(kg){
    let pound = kg*2.2046;
    // rounding the value
    pound = pound.toFixed(0);
    // displaying the result
    outputPounds.innerHTML = pound;
}