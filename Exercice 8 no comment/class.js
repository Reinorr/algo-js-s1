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
            
            console.log("\t" + this.name + " a touché " + pokemon.name)
            console.log("\t" + pokemon.name + " tombe a " + pokemon.hp + "PV")
        } else {
            console.log("\t" + this.name + " a raté " + pokemon.name + " :(")
        }
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

async function main() {
    let magicarpe = new Pokemon("Magicarpe", 75, 50, 350, 0.9);
    let garfield = new Pokemon("Garfield", 150, 15, 250, 0.5);
    let turn = 0
    
    while (magicarpe.hp > 0 && garfield.hp > 0) {
        turn++
    
        console.log("Tour " + turn)

        await delay(500);

        if (turn%2 == 0) {
            magicarpe.attackPokemon(garfield)
        } else {
    
            garfield.attackPokemon(magicarpe)
        }
        
        await delay(1000);
        console.log("\n")
    }
    
    
    if (magicarpe.hp <= 0) {
        console.log("Garfield a gagné")
    } else {
        console.log("Magicarpe a gagné")
    }
}

main()