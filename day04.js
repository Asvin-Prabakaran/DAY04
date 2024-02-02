// FIND ODD NUMBER
//ANONYMOUS
var odd = [];
var foo =function(arr){
for(var i=0;i<arr.length;i++){
if(arr[i]%2 != 0){
odd.push(arr[i]);
}
}
return odd;
}
console.log(foo([4,3,5,7,2,8]));
// IIFE
(function foo(arr){
for(var i = 0 ; i< array.length ; i++){
  if(array[i]%2!=0){
     console.log(array[i])
  } 
}
})
console.log(foo([4,3,5,7,2,8]));

//FINE THE SUM OF NUMBER
//ANONYMOUS

var b = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum=sum + arr[i];
    }
    return sum;
}

console.log(b([1, 2, 3, 4]));

//IIFE
(fucntion b(arr){
var sum = 0;
for(var i = 0 ; i< array.length ; i++){
     sum = sum + array[i];
}
})
return sum;

//PALINDROME 
//ANONYMOUS
var b = function(string){
    if(string==string.split("").reverse().join("")){
      return "is plaindrome"
    }
    else{
      return "is not plaindrome"
    }
  }
  console.log(b("madam"));

 //IIFE
  (function(string){
  if(string==string.split("").reverse().join("")){
    return "is plaindrome"
  }
  else{
    return "is not plaindrome"
  }
})
console.log(b("madam"));

// PRINT PRIME NUMBER
// ANONYMOUS
var b = function(prime){
  prime = prime.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(prime);
}

//IIFE

( function(prime){
  prime = prime.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(prime);
})(b([1,2,3,4]))

// STRING TO TITLE CAPS IN STRING ARRAY
//ANONYMOUS
var b = function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
}

//IIFE

(function (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  return str.join(' ');
})("MUDRA IS MY NAME");



// DUPLICATE FROM AN ARRAY
//ANONYMOUS

var b= function(arr){
  let dup = [...new Set(arr)];
  console.log(dup);
}

//IIFE
(function b(arr){
let dup = [...new Set(arr)];
console.log(dup);
})(b([2,3,5,6,3,2,7]))

//ROTATE AN ARRAY OF K TIMES 
//ANONYUMOUS

function reverse(array , li , ri){
  while(li < ri){
       int temp = a[li];
       a[li]= a[ri];
       a[ri] = temp;
       
       li++;
       ri--;
     }
 }
 Anonymous function : function(array , k){
k = k % a.length;
if(k < 0){
k += a.length;
}
reverse(a, 0, a.length - k - 1);
reverse(a, a.length - k, a.length - 1);
reverse(a, 0, a.length - 1);
}
                           
//IIFE :   
(function(array , k){
k = k % a.length;
if(k < 0){
k += a.length;
}
 
reverse(a, 0, a.length - k - 1);
reverse(a, a.length - k, a.length - 1);
reverse(a, 0, a.length - 1);
})([1,3,5,1,7] 2)


//ARROW FUNCTION
//ODD NUMBER

oddNumbers = (array) => {
for(var i = 0 ; i< array.length ; i++){
if(array[i]%2!=0){
console.log(array[i])
} 
}
}

//SUM OF AN ARRAY

sum = (array)=>{
var sum = 0;
for(var i = 0 ; i< array.length ; i++){
sum = sum + array[i];
}
return sum;
}

//PRIME NUMBER

var b = function(prime){
  prime = prime.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(prime);
}


//PALINDROMES IN AN ARRAY

var b = (string)=>{
  if(string==string.split("").reverse().join("")){
    return "is plaindrome"
  }
  else{
    return "is not plaindrome"
  }
}
console.log(b("madam"));

