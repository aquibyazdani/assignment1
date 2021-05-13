
var randomNums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evenNums = [];
var evenNumbers = function(randomNums) {
    for (var i = 0; i < randomNums.length; i++) {

        if (( randomNums[i] % 2) != 1 )  {
            evenNums.push(randomNums[i] );
        }
       
        }
    }

evenNumbers(randomNums);
console.log(evenNums);
