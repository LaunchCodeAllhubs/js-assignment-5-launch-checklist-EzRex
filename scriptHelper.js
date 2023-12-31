// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`

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
  list.style.visibility = "hidden";  
  let valid = true;;
    //VALIDATION
    //let prevent;
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
        valid = false;
        //prevent = true;
    }
    if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Make sure to enter valid information for each field!");
        //prevent = true;
        valid = false;
    }
    if(validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        //prevent = true;
        valid = false;
    }
    // if(prevent) {
    //   return prevent;
    // }
    

    //UPDATING SHUTTLE REQUIREMENTS
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`
    let coPilotStatus = document.getElementById("copilotStatus");
    coPilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    
    launchStatus = document.getElementById("launchStatus");
    
    let shuttleReady;
    if(fuelLevel < 10000) {
      shuttleReady = false;
      list.style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML ="Fuel level too low for launch";
    } else {
      document.getElementById("fuelStatus").innerHTML ="Fuel level high enough for launch"
    }
    if(cargoLevel > 10000) {
      shuttleReady = false;
      list.style.visibility = "visible";
      document.getElementById("cargoStatus").innerHTML ="Cargo mass too heavy for launch";
    } else {
      document.getElementById("cargoStatus").innerHTML ="Cargo mass low enough for launch";
    }

    if(fuelLevel >= 10000 && cargoLevel <= 10000) {
      list.style.visibility = "visible";
      document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
      document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
      shuttleReady = true;
    }
    if(valid) {
      if(!shuttleReady) {
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        
      } else {
        launchStatus.style.color = 'rgb(65, 159, 106)'
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        

      }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      return response.json(); });

    return planetsReturned;
}

function pickPlanet(planets) {
  return planets[(Math.floor(Math.random()*planets.length))];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
