/*Find max
Given an array with multiple values, write a function that returns the maximum number in the array. 
(e.g. for [-3,3,5,7] max is 7) */

function findMax(arr){
    var max=arr[0];
    var i=0;
    while (i < arr.length){
        if (max<arr[i+1]){
            max=arr[i+1];
        }
        i++;
    }
    return max;
    }

let arr=[];
console.log (findMax(arr));

