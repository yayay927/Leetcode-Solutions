/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 */

function isPalindrome(x: number): boolean {
    let result:boolean = true;
    const numberToString = x.toString();
    const reversedNumberToString = numberToString.split("").reverse().join("");
    
    if(numberToString!==reversedNumberToString){
        result = false;
    };

    return result;
};