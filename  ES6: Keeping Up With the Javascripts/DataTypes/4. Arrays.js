// Arrays are similar to objects, in fact they are special types of objects.
var myjob = "Engineering"
var myArray = [1,2,3, "Ameer", true, myjob];
console.log(myArray);
console.log(myArray.length); // we can't do that with objects but we can do that with arrays
console.log(myArray[5]);

var myNamesArray = new Array();
myNamesArray[0] = "Chris";
myNamesArray[1] = "Newt";
myNamesArray[100] = "Ameer";
console.log(myNamesArray);
console.log(myNamesArray[50]);

// preferred way to declare an array is as follows 
var myNamesArray = ["A", "B"];
myNamesArray.push("C"); // it will push at the end of the array
console.log(myNamesArray)
myNamesArray.pop(); // pops out the last position
console.log(myNamesArray)
myNamesArray.push(["A", "B"]); // iarray inside another array
console.log(myNamesArray)
console.log(myNamesArray[2])
console.log(myNamesArray[2][0])
var sortedArray = myNamesArray.sort();  // Ascending Sort
console.log(sortedArray)
sortedArray.reverse(); // Descending Sort
console.log(sortedArray)
var myBowelerArray = ["shoaib Akter", "Bret Lee", "Ntini"]
var mybatsmenArray = ["Tendulkar", "Saeed Anwar", "Brian Lara"]
var concattedArray = myNamesArray.concat(myBowelerArray,mybatsmenArray);
console.log(concattedArray)

var sortedArray = concattedArray.sort();  // Ascending Sort
console.log(sortedArray)

// Slicing
var slicedArray = concattedArray.slice(2);
console.log(slicedArray);

var slicedArray = concattedArray.slice(2, 5);
console.log(slicedArray);

console.log(myNamesArray)
var joinedArray = myNamesArray.join(" ");
console.log(joinedArray);
var joinedArray = myNamesArray.join(", ");
console.log(joinedArray);
var joinedArray = myNamesArray.join("| ");
console.log(joinedArray);

var multipleArrays = [mybatsmenArray, myBowelerArray];
console.log(multipleArrays);
var lastArray = multipleArrays.pop();
console.log(lastArray);
console.log(multipleArrays);


// Constructor pattern for creating objects example
function Donut(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function() {
      console.log("Type: " + this.type);
    };
    this.showSweetness = function() {
      console.log("Sweetness: " + this.sweetness + "/10");
    };
  }
  
  var coconutDonut = new Donut("coconut", false, 8, true);
  var vanillaDonut = new Donut("vanilla", true, 10, false);

  console.log(coconutDonut);
  console.log(vanillaDonut);
  
  var myDonuts = [coconutDonut, vanillaDonut];
  var lastDonut = myDonuts[1];
  lastDonut.sayType();
  
  var myDonuts = [coconutDonut, "sdfjk", "Test", vanillaDonut];
  var donutLength = myDonuts.length
  var lastDonut = myDonuts[donutLength - 1]; // dynamically grabbing the last item
  lastDonut.sayType();
  lastDonut.showSweetness();


// better implementation with slicing

var myDonuts = [coconutDonut, "sdfjk", "Test", vanillaDonut];
  var lastDonut = myDonuts.slice(myDonuts.length-1); // dynamically grabbing the last item
  console.log(lastDonut);
  lastDonut[0].sayType();
  lastDonut[0].showSweetness();
  