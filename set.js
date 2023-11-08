var x=prompt("Enter a year");
var y=prompt("Enter a month");
var z=prompt("Enter a date");

document.write("Find yesterday and tomorrow from the enter date-------"+"<br>");


var y=y-1;   //for exact month
//today
var today=new Date(x,y,z);
document.write("Your enter date:"+today+"<br>");

var date=today.getDate();
//console.log(date);


//yesterday
var input=today.setDate(date-1);

document.write("A date before your enter date:"+today+"<br>");


//tomorrow
var input=today.setDate(date+1);

document.write("A date after your enter date:"+today);

