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

     
    }
    
    attackPokemon (pokemon) {
        
        
        if (this.isLucky() == true) {
            pokemon.hp -= Math.max(0, this.attack - pokemon.defense)
            pokemon.hp = Math.max(pokemon.hp, 0)
            
            console.log(this.name + " a touché " + pokemon.name)
            console.log(pokemon.name + " tombe a " + pokemon.hp + "PV")
        } else {
            console.log(this.name + " a raté " + pokemon.name + " :(")
        }
    }
}

let magicarpe = new Pokemon("Magicarpe", 75, 20, 350, 0.9);
let garfield = new Pokemon("Garfield", 100, 15, 250, 0.5);
let turn = 0

while (magicarpe.hp > 0 && garfield.hp > 0) {
    turn++;
    console.log("Tour " + turn)
   
    if (turn%2 == 0) {
        setTimeout(() => {
        magicarpe.attackPokemon(garfield)}
        , 1000)
    } else {
        setTimeout(() => {
        garfield.attackPokemon(magicarpe)}
        , 1000)
    }
}

if (magicarpe.hp <= 0) {

    console.log("Garfield a gagné")
} else {

    console.log("Magicarpe a gagné")
}