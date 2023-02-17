function getInputField(elementId){
    const userInputField = document.getElementById(elementId);
    const userInputstring = userInputField.value;
    const userInputTk = parseInt(userInputstring);
    return userInputTk;
}

function getTextField(elementId,value){
    const textField =  document.getElementById(elementId);
    const textfieldString = textField.innerText;
    const previousTextField = parseInt(textfieldString);
    const newTextField = previousTextField + value;
    return textField.innerText = newTextField;
    
    
    
}
document.getElementById('calculate').addEventListener('click',function(){
    const income = getInputField('income-field');
    const foodCost = getInputField('food-field');
    const rentCost = getInputField('rent-field');
    const clothCost = getInputField('cloth-field');
    const totalCost = foodCost + rentCost + clothCost
    const remainingBalanace = income - totalCost;
    const totalExpense = getTextField('total-expense-field',totalCost);
    if(income > totalCost ){
        const balance = getTextField('balance-field',remainingBalanace) 
    }
    else{
        alert ('insufficient balance!!')
    }
   
})