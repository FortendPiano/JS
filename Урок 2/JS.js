'use strict'

var money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    //Объявлены при переключении на цтклы While
    /*oneQestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
    twoQestion = +prompt("Во сколько обойдется?", ''),
    i = 0;*/
    

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: [],
    income: [],
    savings: false,

};

for(var i = 0; i < 2; i++){
    var oneQestion = prompt("Введите обязательную статью расходов в этом месяце", ''),
        twoQestion = +prompt("Во сколько обойдется?", '');
    if((typeof(oneQestion))=== 'string' && (typeof(oneQestion)) != null 
    && (typeof(twoQestion)) != null && oneQestion != '' && twoQestion != '' 
    && oneQestion.length < 10){
        appData.expenses[oneQestion] = twoQestion; 
    }
}


/*while(i < 2 && (typeof(oneQestion))=== 'string' && (typeof(oneQestion)) != null
&& (typeof(twoQestion)) != null && oneQestion != '' && twoQestion != '' 
&& oneQestion.length < 10){
    
        appData.expenses[oneQestion] = twoQestion;
        i++;
}*/

/*do {
    appData.expenses[oneQestion] = twoQestion,
    i++;
} while (i < 2 && (typeof(oneQestion))=== 'string' && (typeof(oneQestion)) != null 
&& (typeof(twoQestion)) != null && oneQestion != '' && twoQestion != '' 
&& oneQestion.length < 10);*/


alert((appData.budget)/30);