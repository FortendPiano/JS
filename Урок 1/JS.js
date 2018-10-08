'use strict'

var money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    oneQestion = prompt("Введите обязательную статью расходов в этом месяце"),
    twoQestion = prompt("Во сколько обойдется?"),
    threeQestion = prompt("Введите обязательную статью расходов в этом месяце"),
    forQestion = prompt("Во сколько обойдется?");


var appData = {
    money,
    timeData: time,
    expenses: {
        oneQestion: twoQestion,
        threeQestion: forQestion,
    },
    optionalExpenses: [],
    income: [],
    savings: false,

};
console.log(appData.expenses);
console.log((money-twoQestion)/30);