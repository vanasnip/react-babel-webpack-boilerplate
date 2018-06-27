class Person {
  constructor(name = 'Annonymous', age = 0){
    this.name = name;
    this.age = age;
  }
  getGreeting(){
    return `Hi, i am ${this.name}.`;
  }
  getDescription(){
    return `${this.name} is ${this.age} years(s) old.`;
  }
  
}

class Student extends Person{
  constructor(name, age, major){
    super(name,age);
    this.major = major;
  }
  hasMajor(){
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if(this.hasMajor()){
    console.log(description);
      description += ` Majoring in ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person{
  constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    let greeting = super.getGreeting();
    if(!!this.homeLocation){
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Student('Somebody',12,'computer science');
const other = new Student();
const travis = new Traveler('Travis',23,'Beirut');

console.log(me.getDescription());
console.log(other.getDescription());
console.log(travis.getGreeting());
console.log(me.getGreeting());
console.log(other.getGreeting());

