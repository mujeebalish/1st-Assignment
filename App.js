// ALERT
/*alert("Welcome dear user to AlishWDev World");
alert(' "The perpose of our life is to be happy" ');
alert(' "Having a soft heart in a cruel world" ' + "\n" + ' "is courage, not weakness. " ');
alert("Wecome to JS Land....");
var confirmBox = confirm("Prevent this page from creating additional dialogs.");
var massege = "Hello...AlishWDev" + "\n" + " Shaping Digital Futures with Apps'";
console.log(massege);*/


//    VARIABLES FOR STRING
/*var username;
var myName = "Mujeeb Rehman Developer";
var massegeString = "Hello Welcome to AlishWDev world";
alert( massegeString);
var studentName = "Mujeeb Rehman Developer";
alert( "student Name" + "\n" + studentName);
var studentAge = 30;
alert("Student Age" + "\n" + studentAge);
var studentInstitute = " Saylani Mass IT Training Program";
alert("Student Institute" + "\n" + studentInstitute);
var pizza = "P" + "\n" + "Pi" + "\n" + "Piz" + "\n" + "pizz" + "\n" + "Pizza";
alert(pizza)
var email = "xyz@gmail.com ";
var emailMassage = "My email address is ";
alert(emailMassage + email);
var massege5 = "Yay! Ican write HTML content through JavaScript";
var homeDesign = '"======MÛjÈË$wyvxu"';
alert(homeDesign);
document.write(massege5 + "<br>" + homeDesign);*/


// VARIABLES FOR NUMBERS
/*var myAge = 30;
alert("I'm " + myAge + " " + "Years old");
var uservisiting = 25;
document.write("Thanks for visiting this site. " + "<br>" +  "Dear visiter you have visited this site for " + uservisiting + "times" + "<br>");
var myBirthyear = 1994;
document.write("My birth year is " + myBirthyear  + "<br>");
var buyerName = "Mujeeb Rehman";
var productName = "Baby Tshirt";
var orderQuatity = 50;
document.write("<table border ='1px'>" + "<tr>" +
    "<th >Name</th>" +
    " <th>Item</th> " +
    "<th>Quantity</th>" +
    "</tr>"+
     "<tr>" +
    "<td>" +buyerName +"</td>"+
    "<td>"+productName+"</td>"+
    "<td>"+orderQuatity+"</td>"+
  "</tr>"
     +"</table>");*/

//  VARIABLES NAMES LEGAL & ILLEGAL
//  in one statement
/*var name = "Mujeeb Rehman";
fatherName = "Salahuddin";
institute = "SMIT";
// Legal names
var market_place;
var $currencyChance;
var price1;
var _School;*/
//  Illegal names
/*var 12345;
var alert;
var my  name;
var #price*/
/*document.write("<h1>" + "Roles for naming js variables" + "</h1>")
document.write("Variable name can contain only letters,numbers,dollar signs,and underscore." + "<br>" + "variable must begin with a " + "<u>" + "$" + "</u>" + "or" + "<u>" + "_" + "</u>" + "and letter. " + "for example $myname" +" "+"_Smit"+" "+"Saylani" + "<br>"+"variable names are cas sensitive"+" "+"variable name shouldn't be any JS keywords "); */

// MATH EXPRESSIONS.
// Addition.
var samsungS22 = 2000;
var samsungS23 = 3000;
var totalMobilePrice = samsungS22 + samsungS23;
document.write("The total price of 2 mobiles is " + totalMobilePrice + "<br>");
// Subtraction.
var totalAmount = 5000;
var returnAmount = 2500;
var ramaining = totalAmount - returnAmount;
document.write("The ramaining amount is 2500 after subtracting 2500 amount from total amount of 5000   " + totalMobilePrice + "<br>");
// Multilication
var tshirt = 200;
var tshirtQuantity = 25;
var totalTshirtAmount = tshirt * tshirtQuantity;
document.write(" Tshirt 200. multipling with quantity amount is" + totalTshirtAmount + "<br>");
// Division
var eide = 50000;
var numberOfLabor = 25;
var amountDivison = eide / numberOfLabor;
document.write("Every labor riceived" + amountDivison + "from 50000 Dividing in 25 number of labors" + "<br>");
// Modulus
var amountforproducts = 15000;
var ramPrice = 3455;
var laptopBattry = 6799;
var totalSpend = ramPrice + laptopBattry;
var mudulus = amountforproducts % totalSpend;
document.write("The remainder of" + amountforproducts + "is" + mudulus + "in mudulus method" + "<br>");

// Increment and Decrement
var juiceprice;
document.write("Juice Price" + " " + juiceprice + "<br>");
juiceprice = 50;
document.write("the initial value " + "<br>");
juiceprice++
document.write("value after increment is " + " " + juiceprice + "<br>");
juiceprice += 10;
document.write("value after addition is" + " " + juiceprice + "<br>");
--juiceprice
document.write("value after decrement is" + " " + juiceprice + "<br>");
var mudulusof9 = juiceprice % 9
document.write("The remainder is" + " " + mudulusof9 + "<br>");

// Algebra Calculation
var parkTicket = 1000;
var totalTickets = 15;
document.write("The total cost to buy" + " " + totalTickets + "visite park is" + " " + parkTicket + "<br>");
// Tabel
var multiplyOf10 = 10;
document.write("<h2>" + "Table of 10" + "</h2>" + "<br>" + multiplyOf10 + "*" + 1 + "=" + multiplyOf10 + "<br>" + multiplyOf10 + "*" + 2 + "=" + 20 + "<br>" + multiplyOf10 + "*" + 3 + "=" + 30 + "<br>" + multiplyOf10 + "*" + 4 + "=" + 40 + "<br>" + multiplyOf10 + "*" + 5 + "=" + 50 + "<br>" + multiplyOf10 + "*" + 6 + "=" + 60 + "<br>" + multiplyOf10 + "*" + 7 + "=" + 70 + "<br>" + multiplyOf10 + "*" + 8 + "=" + 80 + "<br>" + multiplyOf10 + "*" + 9 + "=" + 90 + "<br>" + multiplyOf10 + "*" + 10 + "=" + 100 + "<br>");

// The Temperature Converter
document.write("<h2>"+"The Temperature Converter"+"</h2>");
var celsiusTemperature = 60;
var convertToFahrenheit = (celsiusTemperature * 9) / 5 + 32;
document.write("Convertion of Celcius to Fahrenheit" + "<br>" + 60 + "°C is " + convertToFahrenheit + " " + "Fahrenheit" + "<br>");
var fahrenheitTemperature = 50;
var convertToCelcius = (fahrenheitTemperature - 32) * 5 / 9;
document.write("Convertion of Fahrenheit to Celcius" + "<br>" + 50 + "°F is " + convertToCelcius + " " + "Celcius" + "<br>");

// Shopping Cart
document.write("<h1>"+"Shopping Cart"+"</h1>");
var bookPrice = 200;
var copyPrice = 300;
var baigPrice = 1000;
var penPrice = 120;
var bookQuantity = 10;
var copyQuantity = 10;
var baigQuantity = 10;
var penQuantity = 20;
var deliveryCharch = 300;
document.write("price of Book is"+ " " + " " + bookPrice + "<br>" + "Order Quantity of book is" + " " + bookQuantity + "<br>" + "price of Copy is " + " " + copyPrice + "<br>" + "Order Quantity of Copies are" + " " + copyPrice + "<br>" + "price of baig is" + " " + baigPrice + "<br>" + "Order Quantity of Baig is" + " " + baigQuantity + "<br>" + "price of pen is" + " " + penPrice + "<br>" + "Order Quantity of pen is" + " " + penQuantity + "<br>" + "SHIPPING CHARGES" + " " + deliveryCharch + "<br>");
var perchasingtotal = 2000+3000+10000+2400+300;
document.write("Total cost of your order is"+" "+perchasingtotal);

// Mark Sheet
/*document.write("<h1>"+"Mark Sheet"+"</h1>");
var studentInput1 = +prompt("Enter the total marks:");
var studentInput2 = +prompt("Enter your marks obtained:");
var totalMarks = studentInput1;
var obtaindlMarks = studentInput2;
var marksResult = (obtaindlMarks/totalMarks)*100;
document.write("Total Marks:" +" " + totalMarks + "<br>");
document.write("Marks obtaind:" +" " + obtaindlMarks + "<br>");
document.write("Percentage:" +" " + marksResult + "%" + "<br>");*/

// Currency Exchange
/*document.write("<h1>"+"Currency Exchange in PKR"+"</h1>");
 var usDollar = +prompt("Amount" + "\n" + "$ USD");
 var saudiRyal = +prompt("Amount" + "\n" + "SAR ﷼");
 var usdToPkr = 277;
 var sarTopkr = 74; 
 var convertUsdtoPkr = usDollar*usdToPkr;
 var converSartoPkr = saudiRyal*sarTopkr;
 var totalAmountToPKR = convertUsdtoPkr + converSartoPkr;
 document.write("<h3>"+"Total currency in PKR:" + " " + totalAmountToPKR +"</h3>");*/
//  Arithmetic Operations in a single expression
var bikePrice = 250500;
 var arithmeticResult =  (bikePrice += 100000)*10/2;
 document.write("<h4>"+" Result of Arithmetic Operations in a single expression:" + " " + arithmeticResult +"</43>");


//  The Age Calculator
/*document.write("<h1>"+"Age Calculator"+"</h1>");
var currentyear = +prompt("Enter current year:");
var userBirthyear2 = +prompt("Enter your birth year:");
var yearCalcolatresult = currentyear-userBirthyear2;
document.write("<h4>"+"Current Year:"  + " " + currentyear + "<br>" + "Birth Year:" + " " + userBirthyear2 + "<br>" + "Your Age:" + yearCalcolatresult +  "</4>" + "<br>");*/

// The lifre time supply calculator
document.write("<h1>"+" The Lifre Time Supply Calculator"+"</h1>");
var userInpItem = prompt("Enter your favorite snaks");
var userInpAge1 = +prompt("Enter your current age");
var userInpMaxAge = +prompt("Enter your estimated miximum age ");
var userInpEstimatAmount = +prompt("Enter estimated amount");
var itemName = userInpItem;
var userCurrentAge1 = userInpAge1;
var userMaxAge3 = userInpMaxAge;
var estimatedAmount = userInpEstimatAmount;
var yearDays = 360;
var itemAmoutPerYear = estimatedAmount*yearDays;
var multiPYEstimatAge = itemAmoutPerYear*userMaxAge3;
document.write("<h3>"+"favourite item:" + " " + itemName +"</h3>");
document.write("<h3>"+ "current Age:" + " " + userCurrentAge1 +"</h3>");
document.write("<h3>"+ "Estimated Miximum age:" + " " + userMaxAge3 +"</h3>");
document.write("<h3>"+ "Amount of favorite snaks per day:" + " " + estimatedAmount +"</h3>");
document.write("<h3>"+ "You will need"+ multiPYEstimatAge+itemName + "to last you until the ripe old age of" + " " + userMaxAge3 +"</h3>");







