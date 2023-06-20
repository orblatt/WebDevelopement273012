var customers = ['111', '222', '333'];
var payments = [578, 1000, 235];

function showPayment(){
    var customerId = document.getElementById('customerId').value;
    var creditCard = document.getElementById('creditCard');
    var injectPaymentAmountTo = document.getElementById('injectPaymentAmountTo');
    if (!customerId) {
        injectPaymentAmountTo.innerHTML = '';
        creditCard.disabled = true;
        alert('No customerId found');
    }

    else if (!customers.includes(customerId)) {
        injectPaymentAmountTo.innerHTML = '';
        creditCard.disabled = true;
        alert('Unknown customer');
    } 
    else {
        var paymentAmount;
        for (var i = 0; i < customers.length; i++){
            if (customers[i] == customerId) {
                paymentAmount = payments[i];
            }
            
        }
        if (!paymentAmount) alert('Payment not found');
        creditCard.disabled = false;
        injectPaymentAmountTo.innerHTML = 'payment amount is: ' + paymentAmount;
    }
}