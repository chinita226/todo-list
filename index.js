// object
let person={
    name: "Tian",
    age: 31
};

// dot notation
person.name="Ina";

// bracket notation
person["name"] = "Mary";

// variable to capture user selection

let selection = "name";
person[selection] = "Elen";

console.log(person.name);

// arrays
let selectedColors = [];

// function
function greet(name){
    console.log('this is a function ' + name);
}

greet("Idiot");

function square(number){
    return number*number;
}

console.log(square(3));