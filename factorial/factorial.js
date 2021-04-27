function factorial(number){
      // checking if number is negative
    if (number < 0) {
        console.log("Error! Factorial for negative number does not exist.");
      }
    
      // if number is 0
      else if (number === 0) {
        // console.log(`The factorial of ${number} is 1.`);
        return 1 ; 
      }
    
      // if number is positive
      else {
        let fact = 1;
        for (var i = 1; i <= number; i++) {
          fact *= i;
        }
        // console.log(`factorial of ${number} is ${fact} `);
      }
};

module.exports = {
    factorial: factorial
};
