function heroesOfCodeAndLogicVII(input) {
    let workArray = input.slice();
    let count = Number(workArray.shift());
    let heroes = new Map();
    let index = 0;

    for (let i = 0; i < count; i++) {
        let [heroeName, hitPts, manaPts] = workArray[i].split(' ');
        hitPts = Number(hitPts);
        manaPts = Number(manaPts);

        if (heroes.has(heroeName) === false) {
            heroes.set(heroeName, {});
        }
        heroes.get(heroeName).manaPts = manaPts;
        heroes.get(heroeName).hitPts = hitPts;

        index++;
    }

    let commandCombo = workArray[index]; index++;

    while (commandCombo !== 'End') {

        if (commandCombo.includes('CastSpell')) {
            // CastSpell – {hero name} – {MP needed} – {spell name}
            let [command, heroeName, manaPtsRequired, spellName] = commandCombo.split(' - ');
            manaPtsRequired = Number(manaPtsRequired);
            
            if (heroes.get(heroeName).manaPts >= manaPtsRequired) {
                heroes.get(heroeName).manaPts -= manaPtsRequired;
                console.log(`${heroeName} has successfully cast ${spellName} and now has ${heroes.get(heroeName).manaPts} MP!`);
            } else {
                console.log(`${heroeName} does not have enough MP to cast ${spellName}!`);
            }

        } else if (commandCombo.includes('TakeDamage')) {
            // TakeDamage – {hero name} – {damage} – {attacker}
            let [command, heroeName, damage, attackerName] = commandCombo.split(' - ');
            damage = Number(damage);
            heroes.get(heroeName).hitPts -= damage;

            if (heroes.get(heroeName).hitPts > 0) {
                console.log(`${heroeName} was hit for ${damage} HP by ${attackerName} and now has ${heroes.get(heroeName).hitPts} HP left!`);
            } else {
                heroes.delete(heroeName);
                console.log(`${heroeName} has been killed by ${attackerName}!`);
            }

        } else if (commandCombo.includes('Recharge')) {
            // Recharge – {hero name} – {amount}
            let [command, heroeName, manaPtsIncrease] = commandCombo.split(' - ');
            manaPtsIncrease = Number(manaPtsIncrease);
            let previousManaPts = heroes.get(heroeName).manaPts;
            heroes.get(heroeName).manaPts += manaPtsIncrease;

            if (heroes.get(heroeName).manaPts > 200) {
                heroes.get(heroeName).manaPts = 200;
                manaPtsIncrease = 200 - previousManaPts;
            }
            
            console.log(`${heroeName} recharged for ${manaPtsIncrease} MP!`);

        } else if (commandCombo.includes('Heal')) {
            // Heal – {hero name} – {amount}
            let [command, heroeName, hitPtsIncrese] = commandCombo.split(' - ');
            hitPtsIncrese = Number(hitPtsIncrese);
            let previousHitPts = heroes.get(heroeName).hitPts;
            heroes.get(heroeName).hitPts += hitPtsIncrese;

            if (heroes.get(heroeName).hitPts > 100) {
                heroes.get(heroeName).hitPts = 100;
                hitPtsIncrese = 100 - previousHitPts;
            }

            console.log(`${heroeName} healed for ${hitPtsIncrese} HP!`);
        }

        commandCombo = workArray[index]; index++;
    }

    for (let [heroe, heroeInfo] of heroes) {
        console.log(heroe);
        console.log(`  HP: ${heroeInfo.hitPts}`);
        console.log(`  MP: ${heroeInfo.manaPts}`);
    }
}

heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',
]);
// heroesOfCodeAndLogicVII([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]);