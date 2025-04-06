document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const clearBtn = document.getElementById('clearAll');
    const amountInput = document.getElementById('mortgageAmount');
    const termInput = document.getElementById('mortgageTerm');
    const rateInput = document.getElementById('interestRate');
    const repaymentRadio = document.getElementById('repayment');
    const resultsDiv = document.getElementById('results');
    const paymentDiv = document.getElementById('monthlyPayment');
    const defaultImg = resultsDiv.querySelector('img');
    const defaultText = resultsDiv.querySelector('p');

    calculateBtn.addEventListener('click', function() {
        const amount = Number(amountInput.value);
        const term = Number(termInput.value);
        const rate = Number(rateInput.value);
        const isRepayment = repaymentRadio.checked;

        if (!amount || !term || !rate) {
            paymentDiv.textContent = "Please fill in all fields";
            return;
        }

        const monthlyRate = rate / 100 / 12;
        const months = term * 12;
        let monthlyPayment;

        if (isRepayment) {
            monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                            (Math.pow(1 + monthlyRate, months) - 1);
        } else {
            monthlyPayment = amount * monthlyRate;
        }

        defaultImg.style.display = 'none';
        defaultText.style.display = 'none';
        paymentDiv.style.fontSize = '24px';
        paymentDiv.style.fontWeight = 'bold';
        paymentDiv.textContent = `£${monthlyPayment.toFixed(2)} per month`;
    });

    clearBtn.addEventListener('click', function() {
        amountInput.value = '';
        termInput.value = '';
        rateInput.value = '';
        repaymentRadio.checked = true;
        defaultImg.style.display = 'block';
        defaultText.style.display = 'block';
        paymentDiv.textContent = '';
    });
});