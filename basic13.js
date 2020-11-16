//The Basic 13
//1) Print 1-255
function printNum() {
    for (var i = 1; i < 256; i++) {
        console.log(i);
    }
}

print();

//2) Print Odds 1-255
function printOdds() {
    for (var i = 1; i < 256; i++)
        if (i % 2 !== 0) {
            console.log(i);
        }
}

printOdds();

//3) Print Ints and Sum 0-255
function intSum(sum) {
    for (var i = 0; i < 256; i++) {
        sum += i;
        console.log(i);
        console.log(sum)
    }
}

intSum(0);

//4)Iterate and Print Array
function printArrayVals(arr, i) {
    for (; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//Array with starting index
printArrayVals([0, 1, 2, 3, 4, 5, 6], 0);

//5)Find and Print Max
var maxNum;

function findMax(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == arr[0]) {
            maxNum = arr[i];
        } else if (arr[i] > maxNum) {
            maxNum = arr[i]
        } else if (i == arr.length - 1) {
            return maxNum;
        } else {
            console.log("No change - Max: " + maxNum);
        }
    }
}

maxNum = findMax([3, 0, 5, 1, 2]);
console.log(maxNum);

//6) Get and Print Averages
var avg = 0;

function PrintAverageOfArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        avg += arr[i];
        if (i == arr.length - 1) {
            avg = avg / arr.length;
            return avg;
        }
    }
}

avg = PrintAverageOfArray([0, 1, 2, 3, 4, 5]);
console.log(avg);

//7) Array with Odds
var arrOdd = [];

function sortOdds() {
    for (var i = 1; i < 256; i += 2) {
        arrOdd.push(i);
    }
}

sortOdds();
console.log(arrOdd);

//8) Square the Values
var arr;

function SquareArrayValues(arrPow) {
    var arrSquared = [];
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        temp = Math.pow(arr[i], 2);
        arrSquared.push(temp);
    }
    return arrSquared;
}

arr = SquareArrayValues([1, 2, 3, 4]);
console.log(arr);

//9) Greater than Y
function ReturnArrayCountGreaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}
var output = ReturnArrayCountGreaterThanY([3, 6, 2, 8, 0, 1], 2);
console.log(output);

//10) Zero Out Negative Numbers
function ZeroOutArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] *= -1;
        }
    }
    return arr;
}
var output = ZeroOutArrayNegativeVals([-3, 6, 2, -8, 0, -1]);
console.log(output);

//11) Max, Min, Average
function ZeroOutArrayNegativeVals(arr, arr2) {
    var min = arr[0];
    var max = arr[0];
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        avg += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    avg /= arr.length;
    arr2.push(min);
    arr2.push(max);
    arr2.push(avg);
    return arr2;
}
var output = ZeroOutArrayNegativeVals([3, 6, 2, 8, 1], []);
console.log(output);

//12) Shift Array Values 
function ShiftArrayValsLeft(arr) {
    var tempArr = [];
    for (var i = 1; i < arr.length; i++) {
        tempArr.push(arr[i]);
        if (arr[i] == arr[arr.length - 1]) {
            tempArr.push(0);
        }
    }
    arr = tempArr
    return arr;
}
var output = ShiftArrayValsLeft([3, 6, 2, 8, 1]);
console.log(output);

//13) Swap String For Array Negative Values
function SwapStringForArrayNegativeVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    return arr;
}
var output = SwapStringForArrayNegativeVals([-3, 6, 2, -8, 0, -1]);
console.log(output);