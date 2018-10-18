let startPayment = document.getElementById('start'),
    budget = document.getElementsByClassName('budget-value'),
    daybudget = document.getElementsByClassName('daybudget-value'),
    level = document.getElementsByClassName('level-value'),
    expenses = document.getElementsByClassName('expenses-value'),
    optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
    income = document.getElementsByClassName('income-value'),
    monthsavings = document.getElementsByClassName('monthsavings-value'),
    yearsavings = document.getElementsByClassName('yearsavings-value'),
    btnToApproveMandatory = document.getElementsByTagName('button')[0],
    btnToApproveOptional = document.getElementsByTagName('button')[1],
    btnToCalculate = document.getElementsByTagName('button')[2],
    optionalApprove = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    summa = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');




    'use strict'

    let money, time;
    
    function start() {
        
    };
    start();
    startPayment.addEventListener('clicl,', function(){
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("Ваш бюджет на месяц?", '');
        
    
        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
    })
    
    
    let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
    
        //Обязательная статья расходов
        chooseExpenses: function () {
            for (let i = 0; i < 2; i++) {
                let oneQestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
                    twoQestion = prompt("Во сколько обойдется?", '');
    
                if ((typeof (oneQestion)) === 'string' && (typeof (oneQestion)) != null &&
                    (typeof (twoQestion)) != null && oneQestion != '' && twoQestion != '' &&
                    oneQestion.length < 10) {
                    appData.expenses[oneQestion] = twoQestion;
                } else {
                    i--;
                }
            }
        },
    
        //Ежедневный бюджет
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет составляет: " + appData.moneyPerDay);
        },
    
        //Уровень достатка
        detectLevel: function () {
    
            if (appData.moneyPerDay < 100) {
                alert("Минимальный уровень достатка(");
    
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                alert("Средний уровень достатка)");
    
            } else if (appData.moneyPerDay > 2000) {
                alert("Высокий уровень достатка=)");
    
            } else {
                alert("Произошла ошибка!");
            }
        },
    
        //Депозитный доход
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?!"),
                    percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
            }
        },
    
        //Статья необязательных расходов
        chooseOptExpenses: function () {
            for (let i = 1; i < 4; i++) {
                let qestion = prompt("Статья необязательных расходов?", '');
                appData.optionalExpenses[i] = qestion;
            }
        },
    
        //Доп. доход
        chooseIncome: function () {
    
            let items = prompt("Что принесет человеку дополнительный доход? (Перечислите через запятую)", '');
            appData.income = items.split(',');
            appData.income.push(prompt('Может что-то еще?!'));
            appData.income.sort();
    
            while (items != "" || items == null){
            
                items = prompt("Что принесет человеку дополнительный доход? (Перечислите через запятую)", '');
            
            }
        }
    };
    
    
    
    
    appData.chooseIncome();
    appData.income.forEach(function (item, i) {
        console.log((i + 1) + ": " + 'Способы доп. заработка: ' + item);
    });
    
    for (let key in appData) {
        console.log("Наша программа включает в себя: " + key + ": " + appData[key]);
    }