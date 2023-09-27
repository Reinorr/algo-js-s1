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