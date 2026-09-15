"use strict"
let goldBalance = "200";

console.log(typeof(goldBalance));
goldBalance = Number(goldBalance);
console.log(typeof(goldBalance));

let isVip = true;
let discountCdode = null;
let  amount = 0;
let itemType = "";
let basePrice = 0;


for ( let i = 0; i < 3; i++){
    if (i === 0 ) itemType = "weapon";
    else if (i === 1 ) itemType = "potion";
    else if (i === 2 ) itemType = "sold out"
    else if (i === 3 ) continue
    
    switch (itemType){

        case "weapon": {
    basePrice = 200;
    if (goldBalance >= 300) basePrice *= 0.80;
    if (isVip) basePrice *= 0.80;
    amount += basePrice;
    console.log(`Switch Gold ${amount}`);
    break;
}
        case "potion":{
            basePrice = 50
            basePrice =  goldBalance >= 300 ? basePrice *= 0.80 : basePrice
            amount += basePrice
            console.log(`Switch Gold ${amount}`)
            break;
        }
        case "sold out":{
            basePrice = 0
            amount += basePrice
            console.log(`soldout`)
            break;
        }
        default: console.log("unknown item warning")
    }
    
    

}

 let userDiscountCoode = discountCdode ?? "NONE"

 function getShopTier(goldBalance){
    if (goldBalance < 200) return "Bronze";
    else if (goldBalance >= 200 && goldBalance <= 499) return "Silver"
    else return "Gold"
 }

 const applyTax = function(amount) { return amount * 1.05; };

 const formatGold = (amount) =>  `${amount}g`
  


 console.log(`Gold Balance: ${goldBalance}, Tier: ${getShopTier(goldBalance)}, Gold: ${formatGold(amount)}, DiscountCode: ${userDiscountCoode}, Post Tax Total: ${applyTax(amount)} Remaining Gold: ${goldBalance - applyTax(amount)}`)