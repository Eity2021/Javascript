
// problem 1

// for( i = 0; i <= 10;i++){

//     if(i % 2 == 0){
//         console.log(i);
//     }
// }


//problem 2

// var number = parseInt(prompt("Enter your integer number"));

// let j = 0;
// for(j=0 ; j<=10; j++){

// const result = j * number;
// console.log( `${number} * ${j} = ${result}`);

// }


// problem 6


// var array = [2,67,3,8,35,68,09,341,545,782,656];

// array.sort(function(a,b){
//     return b-a;
// })

// console.log(array);




// problem 7 Create a function that filters out negative numbers

// var filter = [3,5,7,2,-5,3,57,234,-56,343,-546];
// console.log(filter);

// filtering = filter.filter(function(x){
//     return(x >-1);
// });
// console.log(filtering);


// problem 7 Create a function that filters out negative numbers

// var filter = [3,5,7,2,-5,3,57,234,-56,343,-546];
// console.log(filter);

// filtering = filter.filter(function(x){
//     return(x <-1);
// });
// console.log(filtering);

// problem 8 Remove the spaces found in a string

// javascript remove all whitespaces

// var spacesString= "Do I have spaces?"; 
// var noSpacesString= spacesString.replace(/ /g,'');

// console.log(noSpacesString);

// problem 9 Return a Boolean if a number is divisible by 10

// var variable = prompt("Enter your number");

// if( variable % 10 == 0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// problem 10 Return the number of vowels in a string

// function vowel_count(str1)
// {
//   var vowel_list = 'aeiouAEIOU';
//   var vcount = 0;
  
//   for(var x = 0; x < str1.length ; x++)
//   {
//     if (vowel_list.indexOf(str1[x]) !== -1)
//     {
//       vcount += 1;
//     }
  
//   }
//   return vcount;
// }
// console.log(vowel_count("The quick brown fox in the jungle"));



// problem 11  Display the current day and time in a specific format


// var today = new Date();
// var day = today.getDay();
// var daylist = ["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
// console.log("Today is :" + daylist[day] + +".");

// var hours = today.getHours();
// var mintues = today.getMinutes();
// var second = today.getSeconds();

// console.log(hours);
// console.log(mintues);
// console.log(second);


// problem 12


// for(let x=0;x<=100;x++){

//     if(x % 2 == 0){
//         console.log(x);
//     }
// }

// var number = parseInt(prompt("Enter your Intiger number"));
// for(let i=0;i<=10;i++){

//    result = number * i;

//     console.log( `${number} * ${i} = ${result}`);
// }


// problem 12  Create a function that receives an array of numbers and returns an array containing only the positive numbers


// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// function getPositives(ar)
// {
//     var ar2 = [];
    
//     for(var i = 0; i < ar.length; i++)
//     {
//         var el = ar[i];
        
//         if (el >= 0)
//         {
//             ar2.push(el);
//         }
//     }
    
//     return ar2;
// }


// var ar2 = getPositives(ar);

// console.log(ar2);

// problem 13  Find the maximum number in an array of numbers

// var maxNumber = [9,0,-4,343,567,232,67,343,768,343]

// function getmaxNumber(maxNumber){

//   var  Maxnumber = maxNumber[0];

//     for( let i = 0; i < maxNumber.length;i++){

//         if(maxNumber[i]> Maxnumber){

//             Maxnumber = maxNumber[i];
//         }

//     }

//   return Maxnumber;

// }
// var Maxnumber = getmaxNumber(maxNumber)
// console.log("Max :" ,Maxnumber);



// problem 14  Print the first 10 Fibonacci numbers without recursion

// f0 = 0;
// f1 = 1;

// for( let i=1;i<10;i++){
//     var fi = f0 + f1;
    
//     f0 = f1;
//     f1 = fi;
// }

// console.log(fi)


// function plus(a,b,c,d){
//     return (a * b) - (b+c) + (c - d);
// }

// console.log(plus(20,50,60,40));


// function plus(a,b){
//     return a+b;
// }

// var adding = plus(10,5);
//     console.log(adding);


// let str = "apply,mango,lichi,jackfruit";

// console.log(str.slice(5,17));



