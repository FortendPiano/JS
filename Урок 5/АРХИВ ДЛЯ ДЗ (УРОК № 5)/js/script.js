let part = document.createElement('li'),
    title = document.getElementById('title'),
    ulList = document.querySelector('.menu'),
    li = document.getElementsByClassName('menu-item'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column')[1],
    qestion = document.getElementById('prompt');

//1й пункт задания
    part.classList.add('menu-item');
    ulList.appendChild(part);
    part.textContent = 'Пятый пункт';
    ulList.insertBefore(li[2],li[1]);

//2й пункт задания
    
    document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

//3й пункт задания
    title.innerHTML = "Мы продаем только подлинную технику Apple";

//4й пункт задания
    
    column.removeChild(adv);

//5й пункт задания
    qestion.textContent = prompt('Как вы относитесь к технике Apple?');
    

    

