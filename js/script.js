'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // tabs
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
       
    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (e) => {
        if(e.target && e.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (e.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    // timer

    const deadline = '2022-02-26 14:10';

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                  days1 = Math.floor(t / (1000 * 60 * 60 * 24)),
                  hours1 = Math.floor((t / (1000 * 60 * 60) % 24)),
                  minutes1 = Math.floor((t / 1000 / 60) % 60),
                  seconds1 = Math.floor((t / 1000) % 60);

            function getZero(num) {
                if (num >= 0 && num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }

            days.innerHTML = getZero(days1);
            hours.innerHTML = getZero(hours1);
            minutes.innerHTML = getZero(minutes1);
            seconds.innerHTML = getZero(seconds1);
        

            if (t <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = "00";
                hours.innerHTML = "00";
                minutes.innerHTML = "00";
                seconds.innerHTML = "00";
            }
        }
    }

    // const box = document.querySelector('.container');

    // const width = box.scrollWidth;
    // const height = box.scrollHeight;

    // console.log(width, height);

    // console.log(box.getBoundingClientRect().top);

    // const style = window.getComputedStyle(box);

    // console.log(style.display);

    // const styles = document.body;

    // console.log(document.documentElement.scrollTop);

    setClock('.timer', deadline);



    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    // modalTrigger.forEach(item => {
    //     item.addEventListener('click', () => {
    //         modal.classList.add('show');
    //         modal.classList.remove('hide');
    //         document.body.style.overflow = "hidden";
    //     })
    // })

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
        // clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = "";
    }

    Array.from(document.querySelectorAll('[data-modal]')).forEach(item => {
        item.addEventListener('click', () => {
            openModal()
        })
    });

    // modalCloseBtn.addEventListener('click', () => {
    //     closeModal();
    // })

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // function User(name, id) {
    //     this.name = name;
    //     this.id = id;
    //     this.human = true;
    //     this.hello = function() {
    //         console.log(`Hello ${this.name}`);
    //     };
    // }

    // User.prototype.exit = function() {
    //     console.log(`Пользователь ${this.name} ушел`);
    // };


    // const ivan = new User('Ivan', 28);
    // const alex = new User('Alex', 20);

    // ivan.exit();

    // ivan.hello();
    // alex.hello();

    // console.log(ivan);
    // console.log(alex);

    // function showThis(a, b) {
    //     console.log(this);
    //     function sum() {
    //         console.log(this);
    //         return a + b;
    //     }
    //     console.log(sum());
    // }
    // showThis(4, 5);

    // const obj = {
    //     a: 20,
    //     b: 15,
    //     sum() {
    //         console.log(this);
    //     }
    // };

    // obj.sum();

    // function sayName(surname) {
    //     console.log(this);
    //     console.log(this.name + surname);
    // }

    // const user = {
    //     name: "Join"
    // };

    // sayName.call(user, 'Smith');
    // sayName.apply(user, ['Smith']);

    // function count(num) {
    //     return this*num;
    // }

    // const double = count.bind(2);
    // console.log(double(3));
    // console.log(double(13));

    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        this.style.backgroundColor = 'blue';
    });

    // const obj1 = {
    //     name: 5,
    //     sayNumber() {
    //         const say = () => {
    //             console.log(this.name);
    //         }
    //         say();
    //     }
    // }

    // obj1.sayNumber();

    // const double = a => a * 2;

    // console.log(double(4));



    // class Rectangle {
    //     constructor(height, width) {
    //         this.height = height;
    //         this.width = width;
    //     }

    //     calcArea() {
    //         return this.height * this.width;
    //     }

    //     notArea() {
    //         return this.height / this.width;
    //     }
    // }

    // class ColoredRectandlewithRext extends Rectangle{
    //     constructor(height, width, text, bgColor) {
    //         super(height, width);
    //         this.text = text;
    //         this.bgColor = bgColor;
    //     }

    //     showMyProps() {
    //         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    //     }
    // }

    // const div = new ColoredRectandlewithRext(25, 10, 'Hello World', 'red');

    // div.showMyProps();
    // console.log(div.calcArea());



    // const square = new Rectangle(10, 10);
    // const long = new Rectangle(20, 100);

    // console.log(long.notArea());
    // console.log(long.calcArea());
    // console.log(square.calcArea());


    // // Использовать классы для карточек

    class MenuCard {
        constructor(src, alt, title, description, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.description = description;
            this.price = price;
            this.classes = classes;  // это массив
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            // this.changeToUAH();
            const element = document.createElement('div');

            if (this.classes.length === 0) {
                this.element = "menu__item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}"</h3>
                <div class="menu__item-descr">${this.description}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element); 
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        ".menu .container",
        // 'menu__item',
        // 'big'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню "“Премиум”"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        ".menu .container",
        'menu__item',
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        ".menu .container",
        'menu__item'
    ).render();



    // Rest

    const log = function(a, b, ...haha) {
        console.log(a, b, haha);   
        console.log(haha);
    }

    log("basic", 'rest', 'operator', 'usage');


    // По умолчанию

    function calcOrDouble(number, basis = 2) {
        // basis = basis || 2;
        console.log(number * basis);
    }   

    // calcOrDouble(3, 5);
    calcOrDouble(3);


    // JSON

    const persone = {
        alex: 'Alex',
        tel: '+744444444',
        parents: {
            mom: 'Olga',
            dad: 'Mike'
        }
    };

    // console.log(JSON.stringify(persone));
    // console.log(JSON.parse(JSON.stringify(persone)));

    const clone = JSON.parse(JSON.stringify(persone));
    // console.log(clone);

    clone.parents.mom = "POP";

    console.log(persone);
    console.log(clone);


    const inputRub = document.querySelector('#rub'),
          inputUsd = document.querySelector('#usd');


    inputRub.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        // request.open(method, url, async, login, pass);
        request.open('GET', "js/current.json", true);
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send();

        // status
        // ststusText
        // response
        // readyState
        

        // readystatechange

        // request.addEventListener('readystatechange', () => { //отслеживает статус готовности запроса
        //     if (request.readyState === 4 && request.status === 200) {
        //         console.log(request.response);
        //         const data = JSON.parse(request.response);
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        //     } else {
        //         inputUsd.value = "Что-то пошло не так!";
        //     }

        // });


        // load

        request.addEventListener('load', () => { //отслеживает статус готовности запроса
            if (request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
                inputUsd.value = "Что-то пошло не так!";
            }

        });
    });


    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с Вами свяжимся.',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        postData(item);
    })


    // formData

    // function postData(form) {
    //     form.addEventListener('submit', (e) => {
    //         e.preventDefault();

    //         const statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status');
    //         statusMessage.textContent = message.loading;
    //         form.append(statusMessage);

    //         const request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');
            
    //         // request.setRequestHeader('Content-type', 'multipart/form-data');
    //         const formData = new FormData(form); 

    //         request.send(formData);

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000)
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });
    //     });
    // }

    //  JSON

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            
            request.setRequestHeader('Content-type', 'application/json');
            const formData = new FormData(form); 

            const object = {};

            formData.forEach(function(value, key) {
                object[key] = value;
            });

            const jsonic = JSON.stringify(object);

            request.send(jsonic);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000)
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }

});