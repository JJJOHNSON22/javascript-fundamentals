//1)Biggie Size
function MakeItBig(){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "big";
        }
    }
    return arr;
}

var arr = [-3,2,-8,1];
var output = MakeItBig(arr);
console.log(output);

//2)Print Low, Return High
function PrintLowReturnHigh(){
    var high = 0;
    var low = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > high){
            high = arr[i];
        }
        if(arr[i] < low){
            low = arr[i];
        }
    }
    console.log(low);
    return high;
}

var arr = [5,-3,9,-7];
var output = PrintLowReturnHigh(arr);
console.log(output);

//3)Print One, Return Another
function PrintOneReturnAnother(){
    var secondToLast = 0;
    var firstOdd = 0;
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] == arr[arr.length - 2]){
            secondToLast = arr[i];
            console.log(secondToLast);
        }
        if(arr[i] % 2 !== 0 && counter === 0){
            counter++;
            firstOdd = arr[i];
        }
    }
    return firstOdd;
}

var arr = [8,3,9,-5];
var output = PrintOneReturnAnother(arr);
console.log(output);

//4)Double Vision
function DoubleVision(){
    var NewArr = [];
    for (var i = 0; i < arr.length; i++){
        NewArr.push(arr[i] * 2);
    }
    return NewArr;
}

var arr = [2,3,4];
var output = DoubleVision(arr);
console.log(output);

//5)Count Positives
function CountPositives(){
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            counter++
        }
        if (arr[i] == arr[arr.length - 1]){
            arr[i] = counter;
        }
    }
    return arr;
}

var arr = [1,-4,9,8];
var output = CountPositives(arr);
console.log(output);

//6)Evans and Odds
function EvensOdds(){
    var counterEven = 0;
    var counterOdd = 0;
    for (var i = 0; i < arr1.length; i++){
        if (arr1[i] % 2 !== 0){
            counterOdd++;
        }
        if(counterOdd == 3){
            console.log("That's odd!");
        }
    }
    for (i = 0; i < arr2.length; i++){
        if (arr2[i] % 2 === 0){
            counterEven++;
        }
        if(counterEven == 3){
            console.log("Even more so!");
        }
    }

}

var arr1 = [1,3,5,7,9];
var arr2 = [2,4,6,8,10];
EvensOdds(arr1, arr2);

//7)Increment the Seconds
function IncrementTheSeconds(){
    for (var i = 1; i < arr.length; i += 2){
        if (arr[i] % 2 !== 0){
            console.log(arr[i]);
        }
    }
    return arr;
}

var arr = [3,2,5,7,8,1];
IncrementTheSeconds(arr);

//8)Previous Lengths
function PreviousLengths(){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[0]){
            newArr.push(arr[i]);
        }
        var strArr = arr[i].split("");
    }
}


function PreviousLengths1(){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == arr[0]){
            newArr.push(arr[i]);
        }
        var strArr = arr[i].split("");
        
    } 
}
var arr = ["Hello", "World", "Jerome", "James"];
arr.forEach(PreviousLengths1)

var output = PreviousLengths(arr);
console.log(arr);

//9)Add Seven
function AddSeven(arr, arr2){
    for (var i = 0; i < arr.length; i++){
        arr[i] += 7;
        arr2.push(arr[i]);
    }
    return arr2;
}

var output = AddSeven([1,2,3], []);
console.log(output);

//10)Reverse Array
function ReverseArray(arr, temp){
    var counter = 1;
    for (var i = 0; i < arr.length; i++){
        temp = arr[i];
        arr[i] = arr[arr.length - counter];
        arr[arr.length - counter] = temp;
        counter++;
        if (i + 1 == arr.length - counter || i == arr.length - counter) {
            return arr;
        }
    }
}
var arr = [2,4,6,1,3];
var output = ReverseArray(arr, arr[0]);
console.log(output);

//11)Outlook: Negative
function ArrayToNegative(arr, arr2){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        arr2.push(0 - arr[i]);
        }
        else {
        arr2.push(arr[i]);
        }
    }
    return arr2;
}
var output = ArrayToNegative([2,4,-6,1,3], []);
console.log(output);

//12)Always Hungry
function AlwaysHungry(arr){
    var counter = 0;
    for (var i = 0; i < arr.length + 1; i++){
        if (arr[i] == "food"){
        arr[i] = "yummy";
        counter++;
        }
        if (i == arr[arr.length - 1] && counter === 0){
            console.log("I'm hungry!");
            return arr;
        }
    }
    return arr;
}
var output1 = AlwaysHungry([2,4,"food",1,3]);
var output2 = AlwaysHungry([1,2,3]);
console.log(output1);
console.log(output2);

//13)Swap Toward the Center
function SwapTowardTheCenter(){
    var temp = arr[0];
    for (var i = 0; i < 3; i+=2){
        temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}

var arr = [1,2,3,4,5,6];
var output = SwapTowardTheCenter(arr, num);
console.log(output);

//14)Scale the Array
function scaleTheArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] *= num;
    }
    return arr;
}

var output = scaleTheArray([1,2,3], 5);
console.log(output);