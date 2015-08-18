/*The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?*
collaboration with James Jen! */

function largestPF(number){
	var currentNum = number;
	var factor = 2;
	var largestPFactor = number;
	while(currentNum > 2){
		if(currentNum % factor === 0){
			largestPFactor = currentNum;
			currentNum /= factor;
		}
		else{
			factor++;
		}
	}
	return largestPFactor;
}

var test = 600851475143;
console.log("The largest prime factor of " + test + " is " + largestPF(test));
