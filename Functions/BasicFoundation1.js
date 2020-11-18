//1)Get 1 to 255
function GetNumbers(){
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

var output = GetNumbers();
console.log(output);

//2)Get even 1000
function GetEvenNumbers(){
    var sum = 0;
    for(var i = 1; i < 1001; i+=2){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}
var output = GetEvenNumbers();
console.log(output);

//3)Sum odd 5000
function GetOddNumbers(){
    var sum = 0;
    for(var i = 1; i < 5001; i+=2){
        if(i % 2 != 0)
        sum += i;
    }
    return sum;
}
var output = GetOddNumbers();
console.log(output);

//4)Iterate an array
function SumArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

var arr = [1,5,3,9,2];
var output = SumArray(arr);
console.log(output);

//5)Find max
function MaxNumber(arr){
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    } 
    return max;
}

var arr = [1,5,3,9,2];
var output = MaxNumber(arr);
console.log(output);

//6)Find average
function FindAvg(arr){
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        avg += arr[i];
        if (arr[i] == arr[arr.length - 1]) {
            avg = avg/arr.length;
        }
    }
    return avg;
}

var arr = [1,5,3,9,2];
var output = FindAvg(arr);
console.log(output);

//7)Array odd
function OddArray() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        arr.push(i)
    }
    return arr;
}
var output = OddArray();
console.log(output)

//8)Greater than Y
function GreaterThan(arr, y){
    var num = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            num++;
        }
    }
    return num;
}

var baseNumber = 4;
var arr = [1,5,3,9,2];
var output = GreaterThan(arr, baseNumber);
console.log(output);

//9)Squares
function SquareArray(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr = [1,5,3,9,2];
var output = SquareArray(arr);
console.log(output);

//10)Negatives
function SquareArray(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (arr[i]*arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr = [1,-5,3,-9,2];
var output = SquareArray(arr);
console.log(output);

//11)Max/Min/Avg
function FindMaxMinAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var avg = 0;
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        avg += arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] == arr[arr.length - 1]){
            avg /= arr.length;
            newArr.push(max);
            newArr.push(min);
            newArr.push(avg);
            return newArr;
        }
    }
}

var arr = [4,2,5,8,1,9];
var output = FindMaxMinAvg(arr);
console.log(output);

//12)Swap Values
function SwapValues(arr){
    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

var arr = [1,2,3,4];
var output = SwapValues(arr);
console.log(output);

//13)Number to String
function NumberToString(arr){
    var word = 'Dojo';
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = word;
        }
    }
    return arr;
}

var arr = [3,-2,1,-8,5];
var output = NumberToString(arr);
console.log(output);