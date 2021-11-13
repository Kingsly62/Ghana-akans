let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Friday","Sarturday"]

let maleAkans = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

let femaleAkans = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function akanFamily(event){
    event.preventDefault(event)
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let dayNumber = new Date(date).getDay()

if (gender == 'Male'){
       console.log(`You were born on 
      ${weekDays[dayNumber]} and your Akan name is
      ${maleAkans[dayNumber]}
`)
}else if (gender == 'Female'){
     console.log(`You were born on 
     ${weekDays[dayNumber]} and your Akan name is
     ${femaleAkans[dayNumber]}
    `)   
}else{
console.log('Make your gender selection kindly for more information');
}




};