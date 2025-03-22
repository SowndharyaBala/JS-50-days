function distConvert(){

   let distanceKm = document.getElementById("km").value;
   let milesInput = document.getElementById("miles");

   if(isNaN(distanceKm) || distanceKm <=0 ){
    alert( "please enter number greater than zero");
    milesInput.value = "";
   }else{
    let miles = distanceKm * 0.621371;
    milesInput.value= miles.toFixed(2)
   }
}

function tempConvert(){

   let tempCelsius = document.getElementById("celsius").value;
   let fahrenheit = document.getElementById("fahrenheit");

   if(isNaN(tempCelsius) ){
      alert ("please enter value");
      fahrenheit.value = ""
   }else{
      let Fah = (tempCelsius * 9/5) +32;
      fahrenheit.value = Fah;
   }
}
