// step 1: add event handaler with deposit button 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // step 2: get the value of deposit amount inside input field 
    // text area or input field ar value pete hole .value nite hoy 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    console.log(newDepositAmount)
    
    // step 3: get the value of deposit elements 
    const depositAmoutElement = document.getElementById('privious-deposit-amount');
    const previousDepositTotalString = depositAmoutElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)

    // step 4: add previousDepositTotal and newDepositAmount 
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositAmoutElement.innerText = currentDepositTotal;

    // step 5: add currentDepositTotal with main balace
    
    const priviousBalanceElement = document.getElementById('privious-balance');
    const priviousBalanceString = priviousBalanceElement.innerText;
    const priviousBalance = parseFloat(priviousBalanceString);

    // calculate the currentTotalBalace balance 
    const currentTotalBalace = priviousBalance + currentDepositTotal;
    // set the value of total balance 
    priviousBalanceElement.innerText = currentTotalBalace;
    



    // last step:
    depositField.value ='';


})