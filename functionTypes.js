//1.Sum of Array using Function
let a = [1,2,3,4,5,6,7,8,9];
let add = 0;
function sum(a)
{
    for(var i=0;i<a.length;i++)
    {
        add+=a[i];
    }
    return add;
}
console.log("Sum of Array Using Function:");
console.log( sum(a) );
  //Sum of Array Using Anonymous function:
  add =0;
  let sum1 = function (a)
  {
      for (var i=0;i<a.length;i++)
      {
          add+=a[i];
      }
      return add;
      
  }
  console.log("Sum of Array Using Anonymous Function:");
  console.log(sum1(a));
  //Sum of Array Using IIFE Function Method:
  (function addition()
  {
      add=0;
      for (var i=0;i<a.length;i++)
      {
          add+=a[i];
      }
      console.log("Sum of Array Using IIFE Function:");
      console.log(add);
      
  })([1,2,3,4,5,6,7,8,9]);
  // Sum of Array Using Arrow Function:
  let addition=(a)=>{
      add=0;
      for (var i=0;i<a.length;i++)
      {
          add+=a[i];
      }
      return add;
  }
  console.log("Sum of Array Using Arrow Function:");
  console.log(addition(a));
  // 2.Convert all Strings to title Caps in a String using Function:
  const text = " welcome to the website";
  function b(text)
  {
      let words = text.split(" ");
      for(var i=0; i<words.length; i++)
      {
          words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
      return words.join(" ");
  }
  console.log("Converting all Strings to Title Caps using Function:");
  console.log ( b(text) );
  //Convert all Strings to title Caps in a String using Anonymous Function:
  const txt = " greetings of the day";
  let words1 = txt.split(" ");
  let ab = function(txt){
      for(var i=0; i<words1.length; i++)
      {
          words1[i] = words1[i].charAt(0).toUpperCase() + words1[i].slice(1);
      }
      return words1.join(" ");
  }
  console.log("Converting all Strings to Title Caps using Anonymous Function:");
  console.log (ab(txt));
  //Convert all Strings to title Caps in a String using IIFE Function:
  const text1= " problems given to solve, is solved using types of function";
  ( function convertion()
  {
      let words2 = text1.split(" ");
      for(var i=0; i<words2.length; i++)
      {
          words2[i] = words2[i].charAt(0).toUpperCase() + words2[i].slice(1);
      }
      console.log("Converting all Strings to Title Caps using IIFE Function:");
      console.log(words2.join(" "))
  })(text1)
  //Convert all Strings to title Caps in a String using Arrow Function:
  const t = " thank you"
  let convert = (t) => {
      let word = t.split(" ");
      for(var i=0; i<word.length; i++)
      {
          word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
      }
      return word.join(" ");
  }
  console.log("Converting all Strings to Title Caps using Arrow Function:");
  console.log(convert(t));
  //3. Return all Palindromes in an array using Function:
 const arr = ['car','mom','dad','hello','racecar','why','did'];
 let PalindromeString = [];
 function palindrome(arr)
 {
     for (var i=0; i< arr.length; i++)
     {   
         let p = arr[i];
         let s = arr[i].split("").reverse().join("");
         if(s==p)
         { 
             PalindromeString.push(arr[i])
         }
     }
     return PalindromeString;
 }
 console.log(palindrome(arr));
  //Return all Palindrome in a Array using  Anonymous Function:
 let PalindromeString1 = [];
 let output = function (arr)
 {
     for (var i=0; i< arr.length; i++)
     {   
         let q = arr[i];
         let r = arr[i].split("").reverse().join("");
         if(q==r)
         { 
             PalindromeString1.push(arr[i]);
          }
      }
      return PalindromeString;
 
 }
 console.log("Return all Palindrome in a Array using  Anonymous Function:")
 console.log(output(arr));
 //Return all Palindrome in a Array using  IIFE Function:
 let PalindromeString2 = [];
 (function palstring( )
 {
     for (var i=0; i< arr.length; i++)
     {   
         let u= arr[i];
         let v = arr[i].split("").reverse().join("");
         if(u==v)
         { 
             PalindromeString2.push(arr[i]);
          }
      }
 console.log("Return all Palindrome in a Array using  IIFE Function:");
 console.log(PalindromeString2);
 })(arr);
 //Return all Palindrome in a Array using Arrow Function:
 let PalindromeString3 = [];
 let ps = (arr) => {
     for (var i=0; i< arr.length; i++)
     {   
         let g= arr[i];
         let h = arr[i].split("").reverse().join("");
         if(g==h)
         { 
             PalindromeString3.push(arr[i]);
          }
      }
      return PalindromeString3;
 }
 console.log("Return all Palindrome in a Array using Arrow Function:");
 console.log(ps(arr));
 //4.Print Odd Numbers in array using function:
let A = [11,12,13,14,15,16,17,18,19,20];
let result = [];
function odd(A)
{
    for(var i=0;i<A.length;i++)
    {
        if(A[i]%2!==0)
        {
            result.push(A[i])
        }
    }
    return result;
}
console.log("Printing Odd Numbers in array using function:")
console.log(odd(A));
//Print Odd Numbers in array using Anonymous function:
let result1 = [];
let odd1 = function odd(A)
{
    for(var i=0;i<A.length;i++)
    {
        if(A[i]%2!==0)
        {
            result1.push(A[i])
        }
    }
    return result1;
}
console.log("Printing Odd Numbers in array using Anonymous function:")
console.log(odd1(A));
//Print Odd Numbers in array using IIFE function:
(function odd2(A)
 {  
    let result2 =[]; 
    for(var i=0;i<A.length;i++)
    {
        if(A[i]%2!==0)
        {
            result2.push(A[i])
        }
    }
    console.log("Printing Odd Numbers in array using IIFE function:")
    console.log(result2);
})(A);
//Print Odd Numbers in array using Arrow function
const odd3 =(A) => {  
    let result3 =[]; 
    for(var i=0;i<A.length;i++)
    {
        if(A[i]%2!==0)
        {
            result3.push(A[i])
        }
    }
    return result3;
}
console.log("Printing Odd Numbers in array using IIFE function:")
console.log(odd3(A));