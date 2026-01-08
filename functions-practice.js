// Multiply by 10: .map() [1, 2, 3] → [10, 20, 30].
function testFunctions() {
  const arr = [1, 2, 3];
  const mapped = arr.map((num) => {
    return (num *= 10);
  });
  console.log(mapped);
  // Less than five letters
  const arr2 = ["James", "Ada", "Lily", "Alberto"];
  const lessThanFive = arr2.filter((name) => {
    if (name.length < 5) {
      return name;
    }
  });
  console.log(lessThanFive);

  // Log Everything: .forEach() to log every number + " - logged in terminal".
  const arr3 = [-2, -1, 0, 1, 2];
  const positives = [];

  arr3.forEach((num) => {
    if (num >= 0) {
      positives.push(num);
    }
  });
  console.log(positives);

  // Uppercased: .map() strings to ALL CAPS.
  const arr4 = ["dog", "cat", "bird"];
  const upper = arr4.map((pet) => {
    return pet.toUpperCase();
  });
  console.log(upper);

  // Even Only: .filter() to return only even numbers.
  const arr5 = [1, 2, 3, 4, 5];
  const evens = arr5.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  console.log(evens);
  // Price Tags: .map() numbers into strings with decimals: ["5.00", "10.00"].

  const stringNums = evens.map((num) => {
    return num.toFixed(2);
  });
  console.log(stringNums);

  // Search for 'A': .filter() strings starting with "A".
  const words = ["Apple", "Banana", "Ashley", "Aardvark"];

  const filtered = words.filter((word) => {
    if (word[0].toLowerCase() === "a") {
      return word;
    }
  });
  console.log(filtered);

  // Server Logs: .forEach() to print "Status received: [code]" for [200, 404, 500].
  const logs = [200, 404, 500];
  
 const status = [];
 
 logs.forEach((log, i)=> {
    status.push(log);
    console.log('Status Received ' + status[i]);
  })

// Half Price: .map() to take 50% off an array of prices.
const prices = [300.99, 200, 100];
const halfPrices = prices.map((price) => {
  return price = (Math.floor(price / 2));
})
console.log(halfPrices);


// Passing Grade: .filter() scores above 65 from .

const scores = [55, 60, 88, 92, 40];
const passing = scores.filter((score)=> {
  if (score > 65){
    return score;
  }
})
console.log(passing);
}

testFunctions();



