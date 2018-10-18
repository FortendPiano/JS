let startPayment = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavings = document.getElementsByClassName('monthsavings-value'),
    yearSavings = document.getElementsByClassName('yearsavings-value'),
    expensesItem = document.getElementsByClassName('expenses-item'),
    btnToApproveMandatory = document.getElementsByTagName('button')[0],
    btnToApproveOptional = document.getElementsByTagName('button')[1],
    btnToCalculate = document.getElementsByTagName('button')[2],
    optionalApprove = document.querySelectorAll('.optionalexpenses-item'),
    chooseItem = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    summa = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');






let money, time;


startPayment.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');


    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

btnToApproveMandatory.addEventListener('click', function () {
    let sum = 0;
    /*if(expensesItem == ''){
        //btnToApproveMandatory.preventDefault();
        return false;
        alert('Заполните поле!');
    };*/
    for (let i = 0; i < expensesItem.length; i++) {
        let oneQestion = expensesItem[i].value,
            twoQestion = expensesItem[++i].value;

        if ((typeof (oneQestion)) === 'string' && (typeof (oneQestion)) != null &&
            (typeof (twoQestion)) != null && oneQestion != '' && twoQestion != '' &&
            oneQestion.length < 10 || expensesItem == '') {
            appData.expenses[oneQestion] = twoQestion;
            sum += +twoQestion;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

btnToApproveOptional.addEventListener('click', function () {
    for (let i = 0; i < optionalApprove.length; i++) {
        let qestion = optionalApprove[i].value;
        appData.optionalExpenses[i] = qestion;
        optionalExpenses.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnToCalculate.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        dayBudget.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень достатка(";

        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка)";

        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Высокий уровень достатка=)";

        } else {
            level.textContent = "Произошла ошибка!";
        }
    } else {
            dayBudget.textContent = 'Произошла ошибка!';
        } 
});

chooseItem.addEventListener('input', function() {
    let items = chooseItem.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;

});

checkbox.addEventListener('click', function() {
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

summa.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +summa.value,
            per = + percent.value;

        appData.monthIncome = sum / 100 / 12 * per;
        appData.yearIncome = sum / 100 * per;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +summa.value,
        per = + percent.value;

    appData.monthIncome = sum / 100 / 12 * per;
    appData.yearIncome = sum / 100 * per;

    monthSavings.textContent = appData.monthIncome.toFixed(1);
    yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
})

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}