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

console.log(largestPrime(777))

// problem 4

function largestPalindrome(){
	for (let i = 100; i < 1000; i++){
		for (let j = 100; j < 1000; i++){

		}
	}
}

function palindrome(int){
	numbers = int.toString()
	if (numbers.length % 2 != 0){
		return false
	}
	numbers.length / 2 = half
	chunk1 = numbers.slice(0, half - 1) 
	chunk2 =numbers.slice(half, numbers.length - 1)
	return chunk1 === chunk2.reverse()
}







