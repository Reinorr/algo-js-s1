
let musicList = ["The weekend(Michael Gray)","Les Magnolia (Claude Francois)","FTP (Masterboot Record)","Toccata y Fugue en ré mineur (Jean Sebastien Bach)","Anissa(Wejden)"]

//code random numbers
function randInt (maxmusic) {
    return Math.floor(Math.random()*maxmusic);
}
let feuRouge = 0
//fonction trajet

class John {
    constructor(name,sanity, taxiChange) {
        this.name = name
        this.sanity = sanity
        this.taxiChange = taxiChange
}
   trajet() {
    while (feuRouge < 30 && this.sanity > 0 ) {
        let music = musicList[randInt(5)]

        console.log (music)
        feuRouge ++
        console.log (feuRouge + " feu rouges ")
        console.log ("\n")
        
        if (music==musicList[4]) {
            console.log ("\tJohn viens de sauter du taxi en criant")
            this.sanity -= 1
            console.log ("santé mentale : " + this.sanity)
            }

         if (this.sanity === 0) {
             console.log ("\tJohn en a marre, il dégoupille une grenade et maudit Wejden...")
            }
        
        
        if (feuRouge === 30) {
            console.log ("John est arrivé chez lui ! Enfin !!!")
        
        }

        
        }
    }
}


John = new John ("John",10,0)

John.trajet()