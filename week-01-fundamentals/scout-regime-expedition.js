let hp = 100;
let squadLeader = null ?? "Commander";
let encounterType = "";
for (let i = 0; i < 3; i++) {
    if (i === 0) encounterType = "Titan";
    else if (i === 1) encounterType = "ambush";
    else encounterType = "rest";

    switch (encounterType) {
        case "Titan": {
            hp -= 30
            console.log(`Your Hp is: ${hp}`)
            break;
        }
        case "ambush": {
            hp -= 15
            console.log(`Your Hp is: ${hp}`)
            break;
        }
        case "rest": {
            hp += 20
            if (hp >= 100) {
                hp = 100
                console.log(`Your Hp is: ${hp}`)
            } else console.log(`Your Hp is: ${hp}`)
            break;
        }
        default: console.log(`Your Hp is: ${hp}`)
    }
}

function getSurvivalStatus(hp) {
    if (hp <= 0) return "KIA"
    else if (hp < 30) return "Critically Wounded"
    else if (hp < 70) return "Wounded"
    else return "Combat Ready"
}

let formatHp = (hp) => String(`HP: ${hp}/100`)

console.log(`Squadleader: ${squadLeader}, Final Hp ${formatHp(hp)}, Status: ${getSurvivalStatus(hp)}`)