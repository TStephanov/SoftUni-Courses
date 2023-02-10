function solve() {
    let heroes = {
        heroe: {},
        fighter(name) {
            this.heroe.name = name;
            this.heroe.health = 100;
            this.heroe.stamina = 100;
            this.heroe.fight = () => {
                this.heroe.stamina--;
                console.log(`${this.heroe.name} slashes at the foe!`);
            };
            return this.heroe;
        },
        mage(name) {
            this.heroe.name = name;
            this.heroe.health = 100;
            this.heroe.mana = 100;
            this.heroe.cast = (spellName) => {
                this.heroe.mana--;
                console.log(`${this.heroe.name} cast ${spellName}`);
            };
            return this.heroe;
        },
    }

    return heroes;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);