class Pokemon { 
    // la on déclare la classe "Pokemon", apparement on met des majuscules aux classes mais pas aux variables.
    constructor(name, attack, defense, hp, luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky () {
        return Math.random() < this.luck

        // comme le resultat ne peut etre que 2 options (pas une valeure numérique) pas besoins de préciser "return true" et "return false"

        // ANCIEN CODE
        // if (Math.random() < this.luck) {
        //     return true
        // }
        // else {
        //     return false
        // }
    }
    
    attackPokemon (pokemon) {
        // Dans le code "this." représente le pokemon qui attaque et "pokemon." le pokemon qui subit une attaque
        
        if (this.isLucky() == true) {
            // Le pokémon attaque (Math.max fait en sorte que les pv ne deviennent pas négtifs en restreignant les valeurs entre 0 et les HP max du)
            pokemon.hp -= Math.max(0, this.attack - pokemon.defense)
            pokemon.hp = Math.max(pokemon.hp, 0)
            
            console.log(this.name + " a touché " + pokemon.name)
            console.log(pokemon.name + " tombe a " + pokemon.hp + "PV")
        } else {
            // Le pokemon rate
            console.log(this.name + " a raté " + pokemon.name + " :(")
        }
    }
}
// on déclare de nouveaux objets
let magicarpe = new Pokemon("Magicarpe", 75, 20, 350, 0.9);
let garfield = new Pokemon("Garfield", 100, 15, 250, 0.5);
// pour le loop de combat je créer un systeme de tours, comme ca je pourais en suivre le décompte. là je déclare la variable turn qui me servira également a déterminer l'attaquant et l'attaqué.
let turn = 0

while (magicarpe.hp > 0 && garfield.hp > 0) {
    turn++;
    console.log("Tour " + turn)
    // j'utilise le modulo operator (j'avais decouvert ca en C++) pour déterminer qui attaque (en fonction de si la valeur "turn" est pair ou impair)
    if (turn%2 == 0) {
        // Tour de Magicarpe (pair)
        magicarpe.attackPokemon(garfield)
    } else {
        // Tour de Garfield (impair)
        garfield.attackPokemon(magicarpe)
    }
}
// code pour annncer le vainqueur (j'avais fait l'erreur de le mettre a l'interieur de la boucle while d'au dessus)
if (magicarpe.hp <= 0) {
    // C'est Magicarpe qui a perdu
    console.log("Garfield a gagné")
} else {
    // C'est Garfield qui a perdu
    console.log("Magicarpe a gagné")
}