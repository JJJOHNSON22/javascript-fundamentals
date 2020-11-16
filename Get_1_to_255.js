function GetNumbers(){
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

var output = GetNumbers();
console.log(output);