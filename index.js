//income input
const calIncome = document.getElementById('income')
const calIncomeValue = calIncome.value

//food
const calFood = document.getElementById("food")
const calFoodValue = calFood.value

//rent
const calRent = document.getElementById("rent")
const calRentValue = calRent.value

//accessories
const calAccessories = document.getElementById("accessories")
const calAccessoriesValue = calAccessories.value

//function of total expenses
const calculate = document.getElementById("calculate").addEventListener("click", function () {
    const myExpensesUpdate = document.getElementById("expenses")
    const myExpensesUpdateText = myExpensesUpdate.innerText

    const myExpenses = parseFloat(calFood.value) + parseFloat(calRent.value) + parseFloat(calAccessories.value)
    console.log(myExpenses);
    myExpensesUpdate.innerText = myExpenses

})

//total required money
const RequiredCalculate = document.getElementById("calculate").addEventListener("click",function(){
    const myRequiredBalance = document.getElementById("required")
    const myRequiredBalanceText = myRequiredBalance.innerText


    const requiredMoney = parseFloat(calIncome.value) - (parseFloat(calFood.value) + parseFloat(calRent.value) + parseFloat(calAccessories.value))

    if (requiredMoney < calIncomeValue){
        return alert("not enough money to spend")
        // console.log("no");
    }
    else{
        console.log("ok");
    }

    myRequiredBalance.innerText = requiredMoney
})

const mysaving = document.getElementById("save")
const getMySaving = mysaving.value


const mySaving = document.getElementById("saveupdate").addEventListener("click",function(){
    const mySavingAmount = document.getElementById("save")
    const getMySavingValue = mysaving.value
    console.log(getMySavingValue);
    



})  