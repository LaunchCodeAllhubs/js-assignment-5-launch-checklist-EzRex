// Write your JavaScript code here!


window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let coPilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");



        if(validateInput(pilotName.value) === "Empty" || validateInput(coPilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
            alert("Please input for all fields");
            event.preventDefault();
        }
        if(validateInput(pilotName.value) === "Is a Number" || validateInput(coPilotName.value) === "Is a Number") {
            alert("Please enter text for names");
            event.preventDefault();
        }
        if(validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
            alert("Please enter numbers for fuel and cargo levels");
            event.preventDefault();
        }
        formSubmission(document, pilotName.value, coPilotName.value, fuelLevel.value, cargoMass.value)
        
    })
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});