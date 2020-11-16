//Given Array = [6,3,5,1,2,4]
//1)Print Values and Sum
function ValSum(arr){
    var sum = 0;
    var arr = [6,3,5,1,2,4];
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(arr[i]);
        console.log(sum);
    }
}

ValSum();

//2)Multiply Value by Position
function ValMultiply(){
    var arr = [6,3,5,1,2,4];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * i;
    }
    return arr;
}

var newArr = ValMultiply();
console.log(newArr);
