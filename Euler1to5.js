//Problem 1
function euler(){
	res = 0
	for (let i = 1; i <= 1000; i++){
		if (i % 3 === 0 || i % 5 === 0){
			res += i 
		}
	}
	return res 
}

//answer is 234168

//Problem 2

function evenFib(max){
	var i = 1
	var j = 2
	res = 2
	while (i + j < max){
		var temp = i + j
		i = j
		j = temp
		if (j % 2 == 0){
		  res = res + j
		}
	}
	return res
}

evenFib(4000000)
//answer 4613732

//Problem 3

function factors(num){
	var factors = []
	for (let i = 2; i <= Math.sqrt(num); i++){
		if (num % i === 0){
			factors.push(i)
		}
	} 
	return factors
}

function isPrime(int){
	if (int === 1){
		return false
	}
	if (int === 2){
		return true
	}

	for (let i = 2; i < Math.sqrt(int); i++){
		if (int % i === 0){
			return false
		}
	}
	return true
}

function largestPrime(num){
	arr = factors(num)
	largest = 0
	console.log(arr)
	for (let i = 1; i < arr.length; i++){
		if (isPrime(arr[i]) && arr[i] > largest) {
			largest = arr[i]
		}
	}
	return largest
}

largestPrime(600851475143)
//answer is 6857


// problem 4

function largestPalindrome(){
	res = 0
	for (let i = 100; i < 1000; i++){
		for (let j = 100; j < 1000; j++){
			var product = i * j;
			if (palindrome(product) && product > res){
				res = product
			}
		}
	}
	return res 
}

function palindrome(int){
	numbers = int.toString();
	if (numbers.length % 2 !== 0){
	  half = Math.ceil(numbers.length / 2);
	  chunk1 = numbers.slice(0,half);
	  chunk2 = numbers.slice(half - 1, numbers.length);
	  return chunk1 === chunk2.split("").reverse().join("");
	}
	//wish this was ruby, sometimes you have to be obnoxiously verbose in javascript
  half = numbers.length / 2;
	chunk1 = numbers.slice(0, half); 
	chunk2 =numbers.slice(half, numbers.length);
	return chunk1 === chunk2.split("").reverse().join("");
}

largestPalindrome()

//answer is 906609

//problem 5

function divCheck(arr, num){
	arr = arr.reverse()
	for (let i = 0; i < arr.length; i++){
		if (num % arr[i] !== 0){
			return false
		}
	}
	return true
}

function range(int){
  arr =[]
  for (let i = 2; i <= int; i++){
    arr.push(i)
  }
  return arr 
}

function euler(int){
	numbers = range(int)
	product =  numbers.reduce(function(a,b){return a*b;})
	numbers = numbers.reverse()
	condition = true
	while(condition){ 
	for (let i=0; i < numbers.length; i++){
		temp = product / numbers[i]
		console.log(temp)
		if(divCheck(numbers,temp)){
			product = temp
			break;
		}
		if (i === numbers.length - 1){
			return product
		}
	}
	}
	
}

euler(15)

//answer is 23063040





