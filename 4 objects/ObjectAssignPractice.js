var person = {
    name: "Snarf",
    size: "Small",
    color: "redish"
}

var thundercat = {
    race: "thundercat",
    size: "medium",
    sound: "Thundercats Ho!"
}

var smurf = {
    race: "smurf",
    color: "blue"
}


// Make the person a thunder cat by assigning thundercat to person

// let pt = Object.assign(person, thundercat)
// pt;

// We've permanently modified person, but it's better to make a copy.  So copy person then thundercat into a new empty object

let pt2 = Object.assign({},person,thundercat);
pt2;

// Make the a copy of a person that is a smurf
let person2 = Object.assign({},person,smurf);
person2;

// Make a copy of a person that is a smurf then a thundercat

let person3 = Object.assign({},person,smurf,thundercat);
person3;

// Make a copy of a person that is a thundercat then a smurf

let person4 = Object.assign({},person,thundercat,smurf);
person4;

//Last in wins! The last object to come in gets assigned to any duplicate variables. 