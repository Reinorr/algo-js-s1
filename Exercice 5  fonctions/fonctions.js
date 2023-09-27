let a = "Jean"
let b = "Paul"
let result = checkName (a,b)

function checkName(a,b) {
    if (a===b) {
        return "identiques"
    }

    else {
        return "pas identiques"
    }
}
console.log (result)