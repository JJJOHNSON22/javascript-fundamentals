// Algorithm exercises Week 1 Day 3

        // 1.)
        function changeArr(arr) {
            var b = arr.length;
            var temp = arr[b-1];
            arr[b-1] = arr[0];
            arr[0] = temp;
            return arr;
        }
        <!-- this function swaps the first and last value in the arra -->


        console.log( changeArr( [1, 2, 3] ));
        console.log( changeArr( [2, 4] ));

//b = 3
//arr = [3,2,1]
//temp = 3
//



        // 2.)
        function changeArr2(arr) {
            var x = arr.length;
            for (var i = 0; i < arr.length / 2; i++) {
                temp = arr[i];
                arr[i] = arr[x - i - 1];
                arr[x - i - 1] = temp;
            }
        }
        console.log(changeArr2([1, 2, 3]));
        console.log(changeArr2([1, 2, 3, 4, 5]));

        //arr = [3,2,1]
        //x = 3
        //i = 0
        //temp = 1


        //arr = [1,2,3,4,5]
        //x = 5
        //i = 0
