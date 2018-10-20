let startPayment = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudget = document.getElementsByClassName('daybudget-value')[0],
    level = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpenses = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavings = document.getElementsByClassName('monthsavings-value')[0],
    yearSavings = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    btnToApproveMandatory = document.getElementsByTagName('button')[0],
    btnToApproveOptional = document.getElementsByTagName('button')[1],
    btnToCalculate = document.getElementsByTagName('button')[2],

    optionalApprove = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    chooseSum = document.querySelector('#sum'),
    choosePercent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let money, time;

btnToApproveMandatory.disabled = true;
btnToApproveOptional.disabled = true;
btnToCalculate.disabled = true;

startPayment.addEventListener('click', function () {
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

    btnToApproveMandatory.disabled = false;
    btnToApproveOptional.disabled = false;
    btnToCalculate.disabled = false;

});

let sum = 0;
btnToApproveMandatory.addEventListener('click', function () {



    for (let i = 0; i < expensesItem.length; i++) {
        let oneQestion = expensesItem[i].value,
            twoQestion = expensesItem[++i].value;

        if ((typeof (oneQestion)) === 'string' && (typeof (oneQestion)) != null &&
            (typeof (twoQestion)) != null && oneQestion != '' && twoQestion != '' &&
            oneQestion.length < 10 && expensesItem != '') {
            appData.expenses[oneQestion] = twoQestion;
            sum += +twoQestion;
        }
        expensesValue.textContent = sum;
    }


    for (let i = 0; i < expensesItem.length; i++) {
        if (expensesItem[i].value === '' || expensesItem[i].value === null) {
            btnToApproveMandatory.disabled = true;
        } else {
            btnToApproveMandatory.disabled = false;

        }

    }
});

console.log(expensesItem.value);

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
        dayBudget.textContent = 'Фиаско!';
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(',');
    incomeValue.textContent = appData.income;
});

checkbox.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            per = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * per;
        appData.yearIncome = sum / 100 * per;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            per = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * per;
        appData.yearIncome = sum / 100 * per;

        monthSavings.textContent = appData.monthIncome.toFixed(1);
        yearSavings.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}