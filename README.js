// Story 1
// Create a function that creates car objects which have a make, model year, and color.

// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

// Challenges:

// Write a function that creates an object that represents a car with the following properties:
// model year
// make
// color
// Add a function to the object that is being returned that concatenates the make, year and color.


/*The car can accelerate, brake, and tell you its speed.

Challenges:

Add a speed variable to the closure of the car object. Add the following functions to the object:
getSpeed: returns current speed
accelerate: increases the speed by 10mph (but does not return anything)
brake: decreases the speed by 7mph (but does not return anything)*/



function carMaker(make, year, color) {  // begin createNewPerson
  var speed = 0
  return {                        // begin object
    make: make,
    year: year,
    color: color,
    getData: function() {         // begin function
      return "Your car is a " + this.year + " " + this.color + " " + this.make 
    },
    getSpeed: function() {
      return speed
    },
    accelerate: function() {
      speed = speed + 10
    },
    brake: function() {
      speed = speed - 7
    }                              // end function
  };                              // end object
}                                 // end createNewPerson

var car1 = carMaker ("Ford", 2003, "white");
console.log(car1.accelerate())
console.log(car1.brake())
console.log(car1.getSpeed())
console.log(car1.accelerate())
console.log(car1.brake())
console.log(car1.getSpeed())


carMaker ("Ford", 2003, "white")
