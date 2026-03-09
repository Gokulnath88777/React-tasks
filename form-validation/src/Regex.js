 function nameCheckFunc(value) {
    if (!value || value.trim().length < 3) {
        return false
    }
    else {
        return true
    }
}
 function emailCheckFunc(value) {
    let emailRegex = /^[a-zA-Z0-9.+_]+\@gmail\.com$/
    console.log("function")
    if (!value || !emailRegex.test(value)) {
        return false
    }
    else {

        return true

    }
}
function passCheckFunc(value) {
    if (value=== '') { return "Input invalid"}

    else if (!value) {
        return "password is empty"
    }
    else if (value.length < 5) {
        return("password is too week")
    }

    else if (!(/[A-Z]/.test(value))) {
        return("password should contain one upper case")
    }
    else if (!(/[0-9]/.test(value))) {
        return("password should contain one number")
    }
    else {
        return(" ")
    }


}
export {nameCheckFunc,emailCheckFunc,passCheckFunc}