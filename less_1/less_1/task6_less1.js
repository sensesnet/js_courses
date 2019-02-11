// Написать тесты и саму функцию quadraticEquation, которая на вход принимает коэффициенты квадратного уравнения,
// а возвращает массив с вещественными корнями этого уравнения (если они есть).

quadraticEquation = function returnAllArgs(a, b, c) {
    // load math.js
    const math = require('mathjs')
    console.log(`(${a})x^2+(${b})x + ${c} = 0`)
    var d = b * b - 4 * a * c;
    if (d > 0) {
        var x = (-b + math.sqrt(d)) / 2 * a;
        var y = (-b - math.sqrt(d)) / 2 * a;
        console.log(`[${x};${y}]`);
    }
    if (d === 0) {
        var x = (-b / 2 * a);
        console.log(`[${x}]`);
    }
    if (d < 0)
        console.log(`not found!`);
}


console.log("===Task 6===");
quadraticEquation(1, -8, 72); // x^2 - 8*x + 72 -> []
quadraticEquation(1, 12, 36); // x^2 + 12*x + 36 -> [-6]
quadraticEquation(1, 6, 1); // 1*x^2 + 6*x + 1 -> [-0.1715728752538097, -5.82842712474619]
console.log("========");
