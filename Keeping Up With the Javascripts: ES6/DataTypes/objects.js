// objects are collections of name-value pairs, it looks so much like dictionary in python

var myname = {1: "Ameer"}; // 1 gets converted into string
console.log(myname);



var myObject = new Object();
myObject['1'] = "Ameer Ul Islam";
myObject['2'] = "Kajol";
console.log(myObject);

var myOtherObject = {}; // this is the prefered way but it's empty or filled
var myOtherObject = {
    1 : "Ameer",
    2 : "Kajol",
    3 : "Ertugrul",
    4 : "Aqsa",
}
console.log(myOtherObject);
myOtherObject['6'] = "Jhiri"
myOtherObject['stingKeyisworks Too'] = "example Value"
console.log(myOtherObject);

// mixed data type objects
var profile = {
    firstName : "Ameer",
    LastName : "Ul Islam",
    age: 37,
    phone:{ 
        mobile: "555-555-5555",
        home: "1111-222-3333"
    },
    address: "some fake address in Dhaka",
    // this function will have local scope
    sayHi: function() {
        console.log("Hi");
    },
    sayAge: function(){
        console.log("The age is " + this.age);
    }
};
console.log(profile);
console.log(profile.phone);
console.log(profile.phone.home);
console.log(profile['age']);
profile.sayHi(); // invoking function
profile.sayAge(); // invoking function

// Constructor pattern for creating objects
function profileConstructor(firstName, LastName, age, phone, address) {
    this.firstName =  firstName;
    this.LastName = LastName;
    this.age = age;
    this.phone = phone;
    this.address = address;
}