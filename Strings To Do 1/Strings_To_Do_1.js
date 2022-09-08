//remove blanks
//(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"

function removeBlanks(str){
    let newStr=""; //create a new empty string

    for (var i = 0; i<str.length; i++){  // go through the string
        if (str[i] != " ")  //find out if any value at certain index is a space
            newStr += str[i] //if space, then we concatenate with new string (in another word, add to the new string)
        
    }        

    return newStr
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "))


/****************************************** */
//get digits
//("abc8c0d1ngd0j0!8") => 801008

function getDigits(arr){
    let dig=""
    for (var i=0; i<arr.length; i++){
        if (!isNaN(arr[i]))
            dig += arr[i]
    }
    return dig;
}
/*another way of writing the code from line23-line29
for (let char in arr)
    if(!isNan(arr[char]))
        dig += arr[char] */

console.log(getDigits("abc8c0d1ngd0j0!8"))
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))



/****************************************** */
//acronyms
//acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
//acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
function acronyms(str){
    let wordsArr = str.split(' ') //get the array of words, split them with a space
    let arcronymStr = ""; //create an empty string for storing acronyms

    for (let word in wordsArr){
        if (wordsArr[word].length>0)
            arcronymStr += wordsArr[word][0].toUpperCase()  //get the word from wordsArr and the first index
    }
        return arcronymStr
}

console.log(acronyms(" there's no free lunch - gotta pay yer way. "))
console.log(acronyms("Live from New York, it's Saturday Night!"))



/****************************************** */
//Count Non-Spaces
//("Honey pie, you are driving me crazy") => 29
//("Hello world !") => 11
function countNonSp(arr){
    let count=0;
    for (var i=0; i<arr.length; i++){
        if (arr[i] != " ")
            count++
    }
    return count
}

console.log(countNonSp("Honey pie, you are driving me crazy"))
console.log(countNonSp("Hello world !"))



/****************************************** */
//Remove Shorter Strings, returns an array that only contains strings longer than or equal to the given value.
//(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
//(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
function rmShStr(arr, len){
    let newString = []
    let nextIndex = 0
    for (let value in arr){
        if (arr[value].length>=len){
            newString[nextIndex++] = arr[value] //post increment, set the newString[nextIndex] value to arr[value], then do ++
        }
    }
    return newString
}

console.log(rmShStr(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(rmShStr(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))