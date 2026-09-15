"use strict"

let totalBillAmounts;
let numberOfDiners = 4;
let customerAge = 61;
let isVip = true;
let isWeekend = true;
let couponCode = null;
let dishPrice = "50";

console.log(typeof dishPrice);
if (dishPrice == 50) {
    console.log("Its the same");
} else console.log("Its not the same")

if (dishPrice === 50) {
    console.log("Its the same");
} else console.log("Its not the same")

dishPrice = Number(dishPrice);
console.log(typeof dishPrice);

totalBillAmounts = numberOfDiners * dishPrice;
if (customerAge > 60 || customerAge < 13) {
    totalBillAmounts *= 0.90;
};

if (isVip == true && isWeekend == true) {
    totalBillAmounts *= 0.95;
}

let diningStatus = (numberOfDiners >= 6) ? "Large Group" : "Standard";
let userCouponCode = couponCode ?? "NONE";
let totalDiscountApplied = (numberOfDiners * dishPrice) - totalBillAmounts;
let perPersonTotal = totalBillAmounts / numberOfDiners;

console.log(`Total Bill Amount: ${(totalBillAmounts)}, Total Discount Applied: ${totalDiscountApplied} User Coupon: ${userCouponCode} Dining Status: ${diningStatus} Per Person Total: ${perPersonTotal}`);