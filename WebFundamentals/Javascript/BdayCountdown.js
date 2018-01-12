today=new Date();
var Bday=new Date(today.getFullYear(), 04, 11);

if (today.getMonth()>04){
    Bday.setFullYear(Bday.getFullYear()+1); 
    var one_day=1000*60*60*24;
    console.log(Math.ceil((Bday.getTime()-today.getTime())/(one_day))+ " days left till my Birthday.");
} 

if (today.getMonth()==04 && today.getDate() > 11){
    var one_day=1000*60*60*24;
    console.log("So Soon!!! Only " + Math.ceil((Bday.getTime()-today.getTime())/(one_day))+ " days left.");
}

if (today == Bday){
    console.log("Happy Birthday!!!");
}
