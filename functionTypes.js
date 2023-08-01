//Sum of Array using Function
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
  
  