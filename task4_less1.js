//Написать функцию isDeepEqual которая принимает на вход двe переменных и проверяет идентичны ли они по содержимому.
isDeepEqual = function (a, b) {
    var equal = require('deep-equal');
    if (a.length !== b.length) return false;
    console.log(equal(a, b));
}

console.log("===Task 4==");
var a = {prop1: 1, list: [1, 2, 3], o: {x: 2}};
var b = {list: [1, 2, 3], o: {x: 2}};
isDeepEqual(a, b);// false
b.prop1 = 1;
isDeepEqual(a, b);// true
console.log("========");

(()=> {
    // actions
    const setAction = document.querySelector('#set');

}