
function isPalindrome() 
{
var str1 = document.getElementById("initstring").value;
//alert(str1); insures function is working

var str2 = str1.substring(0,3);
//alert("str2 = substr" + str2);

str2 = str1.replace(/qwe/ , "asd");
str2 = str1.replace(/qwe/i, "asd");
//alert("replace qwe with asd" + str2);
//i=case insensitive

str1 =str1.toLowerCase();
//alert("lower case str1 " +str1);
str2 = str1.replace(/qwe/g, "asd" + str2);
//alert("replace all" + str2);

//reverse a string 

var splitString = str1.split("");
//alert("split string = " + splitString);
var reverseString = splitString.reverse();
//alert("reverse string = " + reverseString);
var joinString = reverseString.join("");
//alert("join string" + joinString);

if(str1 == joinString)
{
    alert("That is a Palindrome!");
}
else{
alert("That is NOT a Palindrome :(");
}
}
   