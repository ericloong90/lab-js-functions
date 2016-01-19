// Question 1
function maxOfTwoNumbers(a, b) {
  if (b > a) {
    return b;
  }
  else {
    return a;
  }
}

console.log("Max of 1 and 2: " + maxOfTwoNumbers(1, 2));

// Question 2
function maxOfThree(a, b, c) {
  var largest = a;
  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log("Max of 3, 4 and 5: " + maxOfThree(3, 4, 5));

// Question 3
function isCharacterAVowel(string) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(string) !== -1) {
    return true;
  }
  return false;
}

console.log("Character e is a vowel: " + isCharacterAVowel("e"));

// Question 4
function sumArray(array) {
  var sum = 0;
  array.forEach(function (element) {
    sum += element;
  });
  return sum;
}

console.log("Sum of [1, 2, 3, 4] is: " + sumArray([1, 2, 3, 4]));


// Question 4
function multiplyArray(array) {
  var product = 1;
  array.forEach(function (element) {
    product *= element;
  });
  return product;
}

console.log("Product of [1, 2, 3, 4] is: " + multiplyArray([1, 2, 3, 4]));


// Question 5
var numberOfArguments = function(){
  return arguments.length;
};

console.log("Number of arguments passed: " + numberOfArguments(1, "a", 2, 4));



// Question 6
var reverseString = function (sentence){
  return sentence.split("").reverse().join("");
};

console.log("Reverse of Eric is: " + reverseString("Eric"));


// Question 7
function findLongestWord (array) {
  var longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}

var arrayOfWords = ["Hello", "I'm", "twentyfive", "years", "old"];

console.log("The longest word is: " + findLongestWord(arrayOfWords) + " chars");


// Question 8
function filterLongWords (array, minimum) {
  var filtered = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > minimum) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

console.log("Words more than 3: " + filterLongWords(arrayOfWords, 3));


// Bonus 1
String.prototype.reverse_string = function (){
  return this.split("").reverse().join("");
};

console.log("GeneralAssembly".reverse_string());
// Bonus 2
function charactersOccurencesCount(stringToCount) {
  var characters = {};
  // replacing all Capitals by Lowercase letters and removing spaces
  stringToCount = stringToCount.toLowerCase().replace(/\s/g, '');
  stringToCount.split("").forEach(function(l){
    characters[l] = (isNaN(characters[l]) ? 1 : characters[l] + 1);
  });
  return characters;
}

