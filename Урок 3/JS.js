'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
};
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: true,

};

//Статья расходов
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let oneQestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
            twoQestion = +prompt("Во сколько обойдется?", '');
        if ((typeof (oneQestion)) === 'string' && (typeof (oneQestion)) != null &&
            (typeof (twoQestion)) != null && oneQestion != '' && twoQestion != '' &&
            oneQestion.length < 10) {
            appData.expenses[oneQestion] = twoQestion;
        } else {
            i--;
        }
    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

//Ежедневный бюджет
function detectDayBudget() {
    alert("Ежедневный бюджет составляет: " + appData.moneyPerDay);
}

detectDayBudget();

//Сумма накоплений
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?!"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    }
}
checkSavings();

//Уровень достатка
function detectLevel() {

    if (appData.moneyPerDay < 100) {
        alert("Минимальный уровень достатка(");

    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        alert("Средний уровень достатка)");

    } else if (appData.moneyPerDay > 2000) {
        alert("Высокий уровень достатка=)");

    } else {
        alert("Произошла ошибка!");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let qestion = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = qestion;
    }    

chooseOptExpenses();