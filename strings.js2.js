function isPalindrome(str) {
    const len= str.length;
    for (let i= 0; i < len / 2; i++){
        if (str[i] !== str[len -1-i]){
            return false;
        }
    }
    return true;
}

const str1 = 'racecar';
const str2 = 'civic';
const str3 = 'boy';
console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));