//Написать тесты и саму функцию spiral, которая принимает
// на вход двумерный массив и возвращает одномерный массив с элементами
// расположенными по спирали. Матрица не обязательно имеет одинаковые
// размеры по обеим сторонам. Примеры:

spiral = function returnAllArgs() {
    var argsArray = [];
    var array = arguments[0];
    var rowStart = 0;
    var rowLength = array.length - 1;
    var colStart = 0;
    var colLength = array[0].length - 1;

    console.log(arguments);
    while (rowStart <= rowLength && colStart <= colLength) {

        for (var i = rowStart; i <= colLength; i++) {
            console.log(rowStart + "-" + i);
            argsArray.push(array[rowStart][i]);

        }

        for (var j = rowStart + 1; j <= rowLength; j++) {
            console.log(j + "-" + colLength);
            argsArray.push(array[j][colLength]);
        }

        if (rowStart + 1 <= rowLength) {
            for (var k = colLength - 1; k >= colStart; k--) {
                console.log(rowLength + "-" + k);
                argsArray.push(array[rowLength][k]);
            }
        }
        if (colStart + 1 <= colLength) {
            for (var k = rowLength - 1; k > rowStart; k--) {
                console.log(k + "-" + colStart);
                argsArray.push(array[k][colStart]);
            }
        }

        rowStart++;
        rowLength--;
        colStart++;
        colLength--;
    }
    return argsArray.join(",");
}


console.log("===Task 5===");
console.log(spiral([
    [4, 5],
    [6, 7]])); // [4,5,7,6]
console.log("========");
console.log(spiral([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]])); // [1,2,3,6,7,8,7,4,5]
console.log("========");
console.log(spiral([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]]));
console.log("========");
