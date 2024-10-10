"use strict";

var payrate = 12.5;
var payrate2 = 25.0;
var payrate3 = 17.3;

var hours = 20;
var hours2 = 40;
var hours3 = 45;
var person = hours,
  hours2,
  hours3;

var overtimeMultip = 1.5;

var reason = "under 40 hours";
var reason2 = "Exactly 40 hours";
var reason3 = "Over 40 hours";

var grossPay = 0;
var grossPay2 = 1000.0;
var grossPay3 = 821.75;

if (person > 40) {
  grossPay = hours * payrate;
  grossPay = grossPay * overtimeMultip;
}

console.log(grossPay);
