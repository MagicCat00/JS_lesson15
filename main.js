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
    }
}

const frontEndDev = Object.create(worker)
const backEndDev = Object.create(worker)

frontEndDev.role = 'Front End Developer'
backEndDev.role = 'Back End Developer'

frontEndDev.work()
backEndDev.work()

console.log(frontEndDev);
console.log(backEndDev);