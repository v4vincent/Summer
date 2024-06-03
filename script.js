function isStrongPassword(password) {
    if (password.length > 7) {
        if (!password.includes("password")) {
            if (isUpperPassword(password)) {
                return true;
            } else console.log("false - No uppercase characters")
        } else console.log("false - Contains \"password\"")
    } else console.log("false - Too short")
}

isStrongPassword("Qwerty123");

function isUpperPassword(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            if (str.charAt(i).charCodeAt(0) > 64){
                return true;
            }
        }
    }
}

if ('A' === 65){
    console.log("uppercase")
}