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

class Pokemon { 
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky () {
        return Math.random() < this.luck

        // equivalent de la fonction ci dessus
        // if (Math.random() < this.luck) {
        //     return true
        // }
        // else {
        //     return false
        // }
    }
    
    attackPokemon (pokemon) {
        // Dans le code le "this" représente le pokemon qui attaque 
        
        if (this.isLucky = true) {
            // Le pokémon attaque
            pokemon.hp -= Math.max(0, this.attack - pokemon.defense)
            console.log(this.name + " a touché " + pokemon.name)
        } else {
            // Le pokemon rate
            console.log(this.name + " a raté " + pokemon.name + " :(")
        }
    }
}

let magicarpe = new Pokemon("Magicarpe", 75, 20, 350, 0.9)
let garfield = new Pokemon("Garfield", 100, 15, 250, 0.5)

console.log(magicarpe.hp)

garfield.attackPokemon(magicarpe);

console.log(magicarpe.hp)


// while (magicarpe.hp >= 0 || garfield.hp >= 0) {

// }