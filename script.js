
function isStrongPassword(password) {
    if (password.length > 7) {
        if (password !== "password"){
            if (isUpperPassword(password)){
                console.log("true 3")
            } else console.log("false - No uppercase characters")
        } else console.log("false - Contains \"password\"")
    } else console.log("false - Too short")
}



isStrongPassword("passwordQwerty");



function isUpperPassword(str) {
    for (let i = 0; i < str.length; i++) {

        if (!Number.isNaN(str.charAt(i))){
            return false;
        }
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            return true;
        }
    }
    return false;
}

