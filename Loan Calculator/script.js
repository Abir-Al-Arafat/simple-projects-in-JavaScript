// getting the form
const loanForm = document.getElementById('loan-form');
// getting user inputs
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');

const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

// adding event listener
loanForm.addEventListener('submit', function(e){
    // hide results
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';

    // loader stops showing after 2 sec and results get shown
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

// calculate results
function calculateResults(){

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // monthly payment computation
    const x = Math.pow(1+calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    // checking if the value is a finite number or not
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

        // displays results
        document.getElementById('results').style.display = 'block';

        // hides loader
        document.getElementById('loading').style.display = 'none';
    }else{
        document.getElementById('loading').style.display = 'none';
        showError("please input valid numbers");
    }
    // e.preventDefault();
}

// shows error
function showError(error){
    // creates div tag
    const div = document.createElement('div');

    // Gets card and heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    div.className = 'alert alert-danger';

    // creates text node
    const textNode = document.createTextNode(error);

    // append text node to div
    div.appendChild(textNode);

    // inserts error above heading
    card.insertBefore(div, heading);

    // clears error after 2 sec
    // the second argument is in miliseconds
    setTimeout(clearError, 2000);
}

// clears error
function clearError(){
    // removes the element with the alert class
    document.querySelector('.alert').remove();
}