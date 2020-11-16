//1)Print odds 1-20
function PrintOdds() {
    for (var i = 1; i < 21; i++)
    if (i % 2 !== 0){
        console.log(i);
    }
}

PrintOdds();

//2)Sum and Print 1-5
function SumPrint(arr){
    var tempSum = 0;
    for (var i = 0; i < arr.length; i++) {
        tempSum += arr[i];
    }
    return tempSum;
}

var arr = [1,2,3,4,5];
var sum = SumPrint(arr);
console.log(sum)