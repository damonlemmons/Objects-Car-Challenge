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
      speed = speed + 80
    },
    brake: function() {
      speed = speed - 7
    },
                                  // end function
  };                              // end object
}                                 // end createNewPerson

var car1 = carMaker ("Ford", 2003, "white");



/* Story 3
Create a car object and use a while loop to take its speed up to 50mph.

Then use a while loop to brake down to 0mph.
Surprise: it doesnt stop at 0mph, fix that.

Challenges:

Create a loop that accelerates the car up to 70mph.
Create a loop that decelerates the car to 0pmh.
Call break after the car is at 0mph.
Fix the issue.
Hint: The loops use a car object, but is not part of the car object. */



function accelerates(car,speed) {
  while (car.getSpeed() !== speed) {
    car.accelerate()
    var currentSpeed = car.getSpeed()
    console.log(currentSpeed)
    if (currentSpeed >= 80) {
      currentSpeed = 85
      console.log(currentSpeed)
      break;
    }
  }
}


function decelerates(car,speed) {
  while (car.getSpeed() > speed) {
    car.brake()
    var currentSpeed = car.getSpeed() 
    if(currentSpeed < 1 ) {
    currentSpeed = 0
    }
    console.log(currentSpeed)
    
    }
}

accelerates(car1,90)
decelerates(car1, 0)








