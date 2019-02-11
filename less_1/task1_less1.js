//Реализовать функцию fizzBuzz которая выводит числа от 1 до 100. Если число кратно 3 - вместо числа вывести Fizz.
// Если кратно 5 - вывести вместо числа Buzz. Если число кратно и 3 и 5 -
// вывести вместо числа FizzBuzz. Для вывода использовать функцию log (аналогично заданию в классе).
// В теле функции нельзя использовать if, switch, тернарный оператор ? :
function fizzBuzz(n) {
    var s;
    while (n % 3 === 0) {
        s = 'fizz';
        break;
    }
    while (n % 5 === 0) {
        s = 'Buzz';
        break;
    }
    while (n % 5 === 0 && n % 3 === 0) {
        s = 'fizzBuzz';
        break;
    }
    while (s === undefined) {
        s = n;
    }
    return s;
}
console.log("===Task 1===");
for (var i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));
}
console.log("========");
