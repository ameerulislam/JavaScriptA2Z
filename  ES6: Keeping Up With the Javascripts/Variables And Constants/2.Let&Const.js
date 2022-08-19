// scoping anamoly in javascript and es6
function sayHi(){
    var shouldSayHi = true;

    if (shouldSayHi === true){
        var myName = "Ameer"
    }

    // myName = "Kajol"
    console.log('Hi '+ myName) // this myName is function scoped. And that's what we don't want. This would work iven if it is nested further
}

sayHi()