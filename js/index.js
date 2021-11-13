let weekDays = ["Sunday","Monday","Tuesday","Wednesday","Friday","Sarturday"]

let maleAkans = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]

let femaleAkans = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

function akanFamily(event){
    event.preventDefault(event)
    let date = document.getElementById("date").value;
    let gender = document.getElementById("gender").value;
    let dayNumber = new Date(date).getDay()
if (gender=='' || date==''){
    alert('Kindly type in both gender and date')
}

else if (gender == 'Male'){
      alert(`You were born on 
      ${weekDays[dayNumber]} and your Akan name is
      ${maleAkans[dayNumber]}
`)
}else if (gender == 'Female'){
     alert(`You were born on 
     ${weekDays[dayNumber]} and your Akan name is
     ${femaleAkans[dayNumber]}
    `)   
}else{
alert('Make your gender selection kindly for more information');
}




};