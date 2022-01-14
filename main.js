'use strict'

const Person = function (name) {
    this.name = name
}
//конструктор, с большой буквы, всегда вызывается через оператор new

const person1 = new Person('Vlad')
const person2 = new Person('Alex')
const person3 = new Person('Anna')

console.log(person1);
console.log(person2);
console.log(person3);