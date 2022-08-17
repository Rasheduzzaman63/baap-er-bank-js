document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const currentWithdrawAmount = parseFloat(withdrawAmountString);


    const previousWithdrawElement = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdrawAmound = parseFloat(previousWithdrawString)
    

    const totalWithdrawAmound = currentWithdrawAmount + previousWithdrawAmound;
    previousWithdrawElement.innerText = totalWithdrawAmound;


    // previous main balance
    const priviousBalanceElement = document.getElementById('privious-balance');
    const priviousBalanceString = priviousBalanceElement.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);

    const currentTotalMainBalance = priviousBalance - totalWithdrawAmound;
    priviousBalanceElement.innerText = currentTotalMainBalance;


    withdrawField.value = '';
    
})


