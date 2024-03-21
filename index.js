
// counting 10 time loop
for(let i = 1; i <= 10; i++){
    console.log(i)
}



// Even 
for(let i= 0; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Odd
for(let i =1; i <=15;i++){
    if(i % 2 === 1){
        console.log(i)
    }
}


// writing the table:of 7
for(let i =1; i <=10;i++){
    console.log(`7 x ${i} = ${i * 7}`)
}


// finding the Smalleast Number
let number = [2,3,7,4,9,5]
let result = number[0];
for (let i = 0; i < number.length; i++) {
    if(result > number[i]){
      result = number[i]
      console.log(result)
}
  }
console.log(result)


// SUM 
let numbers = [1, 2 ,3]
let result1 = 0
for(let i =0 ;i < numbers.length;i++){
      result1 = result1 + numbers[i]
      
}
console.log(result)


// FACTORIAL
let num = 5
let factorial = 1;

for(let i = 1 ; i <= num; i++){
      factorial = factorial * i

      // console.log(factorial * factorial )
      // factorial = i
      // if(factorial <= i){
      //    factorial= factorial * i
      //     console.log(factorial)           
      // }
      // // if(factorial )
}
console.log(factorial)


