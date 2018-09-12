// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Amerninjawarior{
    constructor(name, bestTime, farthestDifficulty){
        this.name = name;
        this.bestTime = bestTime;
        this.farthestDifficulty = farthestDifficulty;
    }
};


var steve = new Amerninjawarior(`Steve`, `12:04`,7);

steve;



class Person{
    constructor(name,age,height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
};

var jared = new Person('Jared Butler',24,`6 Ft 0 In`);
 
jared;


class Nba{
    constructor(team,state,city,mascot){
        this.team = team;
        this.state = state;
        this.city = city;
        this.mascot = mascot;
    }
};

var jazzUT = new Nba(`Jazz`,`Utah`,`Salt Lake City`,`Jazz Bear`);

jazzUT;

class Fakebank{
    constructor(name,accntNum,balance){
        this.name = name;
        this.accntNum = accntNum;
        this.balance = balance;
    }
};

var jared = new Fakebank(`Jared`,123456,10000);
jared;

function add(num,bal){
    return bal + num;
};

add(5000,jared.balance);

jared