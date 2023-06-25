//push front 
//([5,7,2,3], 8) => [8,5,7,2,3]

function pushToFront(arr, val){ //JS is dynamicaly typed language, array size will be assigned during execution
    for (var i = arr.length; i>0; i--){
        arr[i]=arr[i-1]
        
    }
    arr[0]=val
    return arr
}

console.log(pushToFront([5,7,2,3], 8))



//pop front
//[0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
function popFront(arr){    

    let firstValue = arr[0] //preserve the first value for print purpose, bc we will downsize array length by 1
    for (var i = 0; i<arr.length; i++){
        arr[i] = arr[i+1] //if we use [0,5,10,15] as ex, this will cause arr[3]=arr[4], but there is no arr[4] value exist
                           //hence, we downsize array size by 1
    }
    arr.length = arr.length-1
    console.log(arr)
    return firstValue
    // return arr; this is wrong, after the first return -- return firstValue, it will no longer go to the next line to execute anything
    //hence if I also want to see the result of the array, I have to use console.log, and put it before the return firstValue
}

console.log(popFront([0,5,10,15]))


//insert At
//[100,200,5], 2, 311) => [100,200,311,5]
function insertAt(arr, position, value){
    for (var i = arr.length; i>position; i--){
        arr[i] = arr[i-1]
    }
    arr[position] = value
    return arr;
}

console.log(insertAt([100,200,5], 2, 311))
console.log(insertAt([9,33,7], 1, 42))



//Remove At
//([8, 20, 55, 44, 98, 99, 100],3), return 44 and arr
function removeAt(arr, position){
    var save=arr[position]
    for (var i=position; i<arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.length = arr.length-1 //if set i < arr.length, and without line 58, result will be [xxxxx undefined], bc there is no arr[7]
                            //if set i <arr.length-1, and withou tline 58, result will be [ 8, 20, 55, 98, 99, 100,100], bc i didn't downsize arry by 1
    console.log(save)
    return arr
}

console.log(removeAt([8, 20, 55, 44, 98, 99, 100],3))