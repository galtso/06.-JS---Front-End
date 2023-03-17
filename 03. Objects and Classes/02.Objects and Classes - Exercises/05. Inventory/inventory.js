function inventory(input) {
    let heroes = [];
    for (const line of input) {
        let [hero, level, items] = line.split(' / ');
        level = Number(level);
        heroes.push({ hero, level, items });
    }

    let sorted = heroes.sort((hero1, hero2)=> hero1.level -hero2.level);

    for (const {hero, level, items} of sorted) {
        console.log(`Hero: ${hero}`);
        console.log(`level => ${level}`);
        console.log(`items => ${items}`)
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )

    // Hero: Hes
    // level => 1
    // items => Desolator, Sentinel, Antara
