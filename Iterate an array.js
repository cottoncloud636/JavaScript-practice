/* Iterate an array
Write a function that returns the sum of all the values within an array.
(e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)*/

function arraySum(arr){
    
    var sum=0;
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


let arr=[];
//var size =5;
//arr[a]=prompt ["Enter array element"+]
console.log(arraySum(arr));