/**
 * Repair array with splice element
 */
var changeArr =  [1,2,3,4,5,6];
var length = changeArr.length
var arr = changeArr.splice(3,1);

for (var i = 0; i <= length; i++) {
    if( changeArr[i]<arr[0]  && arr[0]<changeArr[i+1] ){
        changeArr.splice(i+1, 0, arr[0]);
    break;
    }
};

console.log(changeArr);



