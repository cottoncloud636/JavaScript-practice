/*Write a function that would get the sum of all the even numbers from 1 to 1000. 
  You may use a modulus operator for this exercise */

function getEvenSum (){
    var sum = 0;
    for (var num=1; num<=1000; num++){
        if (num%2==0) {
            sum += num;
        }
    }
    return sum;
}

console.log (getEvenSum());