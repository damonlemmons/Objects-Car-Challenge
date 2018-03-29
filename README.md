# Objects-Car-Challenge

// Story 1
// Create a function that creates car objects which have a make, model year, and color.

// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

// Challenges:

// Write a function that creates an object that represents a car with the following properties:
// model year
// make
// color
// Add a function to the object that is being returned that concatenates the make, year and color.

function carMaker(make, year, color) {  // begin createNewPerson
  return {                        // begin object
    make: make,
    year: year,
    color: color,
    getData: function() {         // begin function
      return "Your car is a " + this.year + " " + this.color + " " + this.make 
    }                             // end function
  };                              // end object
}                                 // end createNewPerson

var car1 = carMaker ("Ford", 2003, "white");
console.log(car1.getData())



carMaker ("Ford", 2003, "white")
