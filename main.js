'use strict'

const worker = {
    workplace: 1,
    dinner: 1,
    goToWork: function () {
        console.log('Иду на работу');
    },
    leaveWork: function () {
        console.log('Ухожу с работы');
    },
    work: function () {
        console.log('Работаю');
    },
    sayHello: function () {
        console.log('Привет, меня зовут ' + this.name);
    }
}

const frontEndDev = Object.create(worker)
const backEndDev = Object.create(worker)

frontEndDev.dinner = 2

frontEndDev.role = 'Front End Developer'
backEndDev.role = 'Back End Developer'

frontEndDev.work = function () {
    console.log('Пишу фронт, ем печеньки');
}

frontEndDev.work = function () {
    console.log('Мучаюсь с Бд');
}

const developer1 = Object.create(frontEndDev)
const developer2 = Object.create(frontEndDev)
const developer3 = Object.create(backEndDev)
const developer4 = Object.create(backEndDev)

developer1.name = 'Alex'
developer2.name = 'Ivan'
developer3.name = 'Anna'
developer4.name = 'Elena'

console.log(developer1.dinner);
console.log(developer2.dinner);
console.log(developer3.dinner);
console.log(developer4.dinner);