// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
 
  if(testInput.length === 0) {
    return "Empty";
  } else{
    number = Number(testInput);
    if(isNaN(number)) {
        return "Not a Number";
      } else {
        return "Is a Number";
      }
  }
  
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
    //VALIDATION
    //let prevent;
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("Please input for all fields");
        //prevent = true;
    }
    if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please enter text for names");
        //prevent = true;
    }
    if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter numbers for fuel and cargo levels");
        //prevent = true;
    }
    // if(prevent) {
    //   return prevent;
    // }
    

    //UPDATING SHUTTLE REQUIREMENTS
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`
    let coPilotStatus = document.getElementById("copilotStatus");
    coPilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
    list.style.visibility = "visible";
    launchStatus = document.getElementById("launchStatus");
    
    let shuttleReady = false;
    if(fuelLevel < 10000) {
      shuttleReady = false;
      document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
      //launchStatus.style.color = "RED";
    }
    if(cargoLevel > 10000) {
      shuttleReady = false;
      document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch"
      //launchStatus.style.color = "#C7254E";
    }
    if(fuelLevel > 10000 && cargoLevel < 10000) {
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
      shuttleReady = true;
    }

    if(!shuttleReady) {
      
      launchStatus.innerHTML = "Shuttle Not Ready for Launch";
      launchStatus.style.color = "#C7254E";
    } else {

      launchStatus.innerHTML = "Shuttle is Ready for Launch";
      launchStatus.style.color = 'rgb(65, 159, 106)'

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

console.log(validateInput(""));