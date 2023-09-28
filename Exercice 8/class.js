/*class hero{
    constructor(name,attack,pv) {
        this.name = name
        this.attack = attack
        this.pv = pv
    }
}
class monster{
    constructor(pv,attack){
        this.pv = pv
        this.attack = attack

    }
}
let Reinor = new hero("Reinor",120,300)
let gnome = new monster(10,1200)

console.log(gnome.pv -= Reinor.attack)
if (gnome.pv -= Reinor.attack <= 0 {
    console.log "le gnome est mort"})
*/

class pokemon{
    constructor(name, attack, defense, hp, luck){
    this.name = name
    this.attack = attack
    this.defense = defense
    this.hp = hp
    this.luck = luck
    }
}

isLucky () {
    if (Math.random() <pokemon.luck) {
        return true
    }
    else {
        return false
    }
}



let Magicarpe = new pokemon ("Magicarpe", 150, 150, 150, 0.9)
let Garfield = new pokemon ("Garfield", 75, 100, 150, 0.5)



function attackPokemon (pokemon) {
    while (pokemon1.hp>0 && pokemon2.hp>0) {
        dmgPoke1 = pokemon1.attack - pokemon2.defense  //a
        dmgPoke2 = pokemon2.attack - pokemon1.defense

        pokemon2.pv - (pokemon1.attack - pokemon2.defense )
        console.log (pokemon2.pv)

        pokemon1.pv - (pokemon2.attack - pokemon1.defense )
        console.log (pokemon1.pv)
        
    }
}

