document.getElementById('deposit-btn').addEventListener('click', function(){

    // get the input value & convert to parseFloat.
    const inputAmount = document.getElementById('deposite-amount');
    const inputAmountEnter = inputAmount.value;
    const inputAmountParse = parseFloat(inputAmountEnter);

    // get the deposit total amount and convert string to number.
    const depositTotal = document.getElementById('total-depo');
    const depositTotalNumber = depositTotal.innerText;
    const depositTotalParse = parseFloat(depositTotalNumber);

    // add input and deposit value.
    const newDepositTotal = inputAmountParse + depositTotalParse;
    depositTotal.innerText = newDepositTotal;

    // update the balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousBalance = parseFloat(balanceText);
    const presetBalance = previousBalance + inputAmountParse;
    balanceTotal.innerText = presetBalance;
    inputAmount.value = '';
})

// handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // Withdraw input get and parse float
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawPrevious = parseFloat(withdrawText);

    // withdraw amount get and fix to details
    const withdrawTotal = document.getElementById('withdraw-amount');
    const withdrawTotalText = withdrawTotal.innerText;
    const newWithdraw = parseFloat(withdrawTotalText);

    // calculate total withdraw
    const totalWithdrawAmount = withdrawPrevious + newWithdraw;
    withdrawTotal.innerText = totalWithdrawAmount;

    // update the balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceText);
    const newBalanceTotalAmount = newBalanceTotal - withdrawPrevious;
    balanceTotal.innerText = newBalanceTotalAmount;


    // clear the withdraw input
    withdrawInput.value = '';
})
