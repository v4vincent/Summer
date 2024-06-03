function isStrongPassword(password) {
    if (password.length > 7) {
        if (!password.includes("password")) {
            if (isUpperPassword(password)) {
                return true;
            } else return false;
        } else return false;
    } else return false;
}
function isUpperPassword(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            if (str.charAt(i).charCodeAt(0) > 64){
                return true;
            }
        }
    }
}
