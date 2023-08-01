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
  