let a = "Jean"
let b = "Paul"
let result = checkName (a,b)

function checkName(FirstName,secondName) {
    if (FirstName===secondName) {
        return "identiques"
    }
    else {
        return "pas identiques"
    }
}
console.log (result)

/* console.log = afficher dans la console , alors que return affecte le resultat d'une fonction a une variable*/
