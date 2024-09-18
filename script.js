//-------OBJECTS IN DETAILS-------------
//An object is a common data structure that hold key and value pairs
//objects contains keys and value that are sepearted by columns and properties are separated by commas


const person = {
  firstName:"John",
  lastName: "Doe",
  age:23,
 }

 console.log(person)


 const supreme = {
  firstName:"Olamide",
  lastName: "Abiodun",
  profession: "Caterer",
  isMarried: true,
  gender:"Male"
 }

 console.log(supreme)

const Director = {
  firstName: "Aliu",
  lastName:"Musa",
  Age:40,
  gender:"male",
  isMarried:true,
    car1:{
      carName:"Lexus",
      year:"2010",
      color: "Burgundy",
    },
    car2:{
      carName:"Toyota",
      year:"2015",
      color:"gray",
    }
 }

 console.log(Director)

 //Variable as value in an object


 const firstName = "Rodiya";
 const lastName = "Yusuf";

 const person2 = {
    firstName : firstName,
    lastName: lastName
 }
 console.log(person2)

 const person3 ={
  firstName,
  lastName
 }
 console.log(person3)


//ACCESSING,UPDATE, ADDDING PROPERTIES IN AN OBJECT
//=> Dot Notation .
//=>Square Brackets []

//**************DOT NOTATION*************//
//it is used to access, add, or value a property of an object
//it allows us to retrieve some values from an object


const player = {
firsName : "Opera",
lastName : "Fab",
age: 38,

team:{
  clubName : "Chelsea",
  location: "England",
  manager: "pochettino"
},
jerseyNumber:6
}

console.log(player.team.clubName);
console.log(player['team']['location'])

//****************BUILT IN METHOD******************/

//it is a property that contains a function declaration

const myObject ={
  myObject:()=>{}, // arrow function
  myObject2: function(){}, // function expression
  myObject3() {} // function declaration
}

//Example

const dog = {
  name: "Kim",
  age: 6,

  bark(){
    console.log("woof woof!")
  }
}
console.log(dog.name);
dog.bark()

//***************** OBJECT METHODS*************/

//object.keys() it creates and returns an array containing the keys of an array



const employees = {
  Boss: "Teamlead",
  secretary: "John",
  sales: "Jummmy",
  accountant: "Oscar"
  
}
const employeesInfo = Object.keys(employees)
console.log(employeesInfo)


//Object.values() it creates and returns an array containing the values of an array

const session = {
  id:1,
  date:"05-September-2024",
  device:"mobile",
  browser:"Chrome"

}
const sessionValue = Object.values(session)
console.log(sessionValue)


//Object.entries() it creates a nested array of the key and value pairs of an object
const sessionEntries = Object.entries(session)
console.log(sessionEntries)


//Object.freeze() it prevents modification of existing properties and prevents properties from being added or removed

const user = {
  username: "Ralph",
  password: 123456
}
console.log(user)
const userInfo = Object.freeze(user)

user.username = "Ade"
console.log(user)

//Object.seal() it prevents new properties from being added or removed from an object


const user1 = {
  userame: "Cohort",
  password: 123123
}

const userInfo1 = Object.seal(user1)
user1.username = "Bola"
userInfo1.age = 32
console.log(userInfo1)


let x;

const person5 = {
  name:"Ali",
  age:22,
  isAdmin:true,

  address:{
    street: "12, Unity and Peace",
    city: "ilorin",
    state: "kwara state"
  },

  hobbies:["Music", "Sport"]
}

x = person5.name
console.log(x);


//Access and Array inside object

x = person5.hobbies[0];
let y = person5["hobbies"][1]
console.log(x,y)

//update a property
person5.name = "Abu",
console.log(person5)


person5["isAdmin"] = false
console.log(person5);

//Delete a property

delete person5.address.state
console.log(person5)

//Add a property
person5.hasChildren = true
console.log(person5)

//add function to an object
person5.greet = function(){
  console.log(`Hello, My name is ${this.name}`)
}

person5.greet()


person5.ageProperty = function(){
  console.log(`${this.age}`)
}
person5.ageProperty()