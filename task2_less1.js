// Реализовать фукнцию isPalindrom,
// которая принимает на вход строку и возвращает результат проверки (true/ false ),
// является строка палиндромом (одинаково читается слева направо и справа налево ) или нет
function isPalindrom(s) {

    let str = s.toString().toLocaleLowerCase();

    let i = 1;
    do {
        let begin = str[i - 1];
        let end = str[str.length - i];
        if (begin !== end) {
            console.log(begin + " !== " + end);
            return false;
        }
        console.log(begin + " == " + end);

        i++;
    } while (i <= str.length / 2 + 1) ;
    return true;
}

console.log("===Task 2===");
console.log(isPalindrom('aaaaaaa'));
console.log("========");
console.log(isPalindrom('aaabbbbbaaa'));
console.log("========");
console.log(isPalindrom('aaabaaa'));
console.log("========");
console.log(isPalindrom(123456789));
console.log("========");
console.log(isPalindrom(12344321));
console.log("========");
