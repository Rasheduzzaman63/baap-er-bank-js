document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const currentWithdrawAmount = parseFloat(withdrawAmountString);
    if(isNaN (currentWithdrawAmount)){
        alert('Enter Your Valid Amount ')
        return
    }

    withdrawField.value = '';
    
    const previousWithdrawElement = document.getElementById('previous-withdraw');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdrawAmound = parseFloat(previousWithdrawString)
    

    // previous main balance
    const priviousBalanceElement = document.getElementById('privious-balance');
    const priviousBalanceString = priviousBalanceElement.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);
    if(currentWithdrawAmount > priviousBalance ){
        alert('Your Balance is insufficient')
        return;
    }
    const totalWithdrawAmound = currentWithdrawAmount + previousWithdrawAmound;
    previousWithdrawElement.innerText = totalWithdrawAmound;

    const currentTotalMainBalance = priviousBalance - totalWithdrawAmound;
    priviousBalanceElement.innerText = currentTotalMainBalance;


    
    
})


