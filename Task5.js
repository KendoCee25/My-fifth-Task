//Qustion 1

function fahrenheit (convertFahrenheit) {
    let celsius = 5/9 * (convertFahrenheit - 32);
    console.log(celsius);
}
fahrenheit (70);

//Qustion 2

function averageOfNumber (avg){
    let array = [5, 9, 7, 8];

    let sumOfArray = array.reduce((accumuate, currentvalue)=> {
        return accumuate + currentvalue;
    });

    let averageOfNumber = (sumOfArray / avg);
    console.log(averageOfNumber);
}
averageOfNumber(4)

//Qustion 3

function checkNumber (valueNumber) {
    const numberX = 5;
    const numberY = 10;
    if (valueNumber % numberX === 0 && valueNumber % numberY ===0){
        console.log('Its Divisible')
    }else {
        console.log('Nop')
    }

}
checkNumber(20);

//Qustion 4 

function getPrimeNumbers(){
    const numbers = [2]
    let i=3
    while(numbers.length<100){
        let isPrime=true;
        for(let j=2; j<i; j++){
            if(i%j===0){
                isPrime&=false
                break
            }
        }
        if(isPrime){
            numbers.push(i)
        }
        i++;
    }
    console.log(numbers)
}
 getPrimeNumbers()

 //Qustion 5

 function checkPrime(input){
    let isPrime=true
    for(let j=2; j<input; j++){
        if(isPrime%j===0){
            isPrime=false
            break
        }
    }
    if(isPrime==true){
        console.log('Yes')
    }else {
        console.log('No')
    }
}
checkPrime()

//Qustion 6

function filterArray(){
    input = [15,2,-3,-4,2,7,8,98,-32,76,-12,100]
    array = []
    for(let i=0; i<input.length; i++){
        num = input[i]
        if(num>=0){
            array.push(num)
        }
    }

    console.log(array)
}
filterArray()

//Qustion 7

function fizzBuzz(){
    for(let count=1; count<=100; count++){
        if(count%3===0 && count%5===0){
            console.log('FizzBuzz')
        }else if(count%3===0){
            console.log('Fizz')
        }else if(count%5===0){
            console.log('Buzz')
        }else{
            console.log(count)
        }
    }
}

fizzBuzz()

//Qustion 8

function toTitleCase(str) { 
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
      return match.toUpperCase();
    });
  }

function hashTagGenerator(hashIn){
    if(hashIn===''){
        return false
    }else{
        array = hashIn.split(" ")
        array2 = ['#']
        for(let i=0; i<array.length; i++){
            word = toTitleCase(array[i])
            array2.push(word)
        }
        new_string=array2.join("")
        if(new_string.length>140){
            console.log(false)
        }else{
            console.log(new_string)
        }
    }
}

hashTagGenerator('thanking god for seeing me through to this stage in genesys upskill')

