'use strict'

const man = {
    hands: 2,
    lags: 2,
    eyes: 2,
    walk: function () {
        console.log('Я хожу');
    },
    talk: function () {
        console.log('Я говорю');
    }
}

const newMan = Object.create(man)
const newWoman = Object.create(man)

newMan.name = 'Ivan'
newMan.age = 23

newWoman.name = 'Anna'
newWoman.age = 22

console.log(newMan);
console.log(newWoman);