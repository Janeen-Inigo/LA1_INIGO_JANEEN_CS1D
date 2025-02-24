// 1. Create variable name (favActorFirstName) & store your fav Actor name. 
let faveActorFirstName = "Shin-Hye";

// 2. Create variable name (favActorLastName) & store the last name of (FA). 
let faveActorLastName= "Park";

// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName) 
let fullName = faveActorFirstName + " " + faveActorLastName;

// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name. 
let uppercase = fullName.toUpperCase();

// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE. 
let message = "My favorite actor is " + uppercase;

// 6. Now append this message to the (message variable) `his best show is Silicon Valley`. 
message += " and her best show is The Judge from Hell.";

// 7. Finally log all variables to the console using code runner.
console.log(faveActorFirstName);
console.log(faveActorLastName);
console.log(fullName);
console.log(uppercase);
console.log(message);