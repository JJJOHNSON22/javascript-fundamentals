
// 1
function findMin(){
    var min = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

var arr = [3,5,2,9];
var output = findMin(arr);
console.log(output);


// 2

function findMin(){
    var min = arr[0];
    var index = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            index = i;
        }
    }
    return index;
}

var arr = [3,1,2,9];
var output = findMin(arr);
console.log(output);

// 3

function minToFront(arr){
    var min = arr[0];
    var temp;
    var index = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
            index = i;
        }
        if (i == arr.length - 1){
            temp = arr[0];
            arr[0] = min;
            arr[index] = temp;
        }
    }
    return arr;
}

var arr = [1,5,2,9];
var output = minToFront(arr);
console.log(output);

// 4 

function removeAt(arr, y){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] !== arr[y]){
        newArr.push(arr[i]);
        }
    }
    return newArr;
}

var arr = ['a','b','c'];
var output = removeAt(arr, 1);
console.log(output);
