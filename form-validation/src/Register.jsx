import { useRef, useState } from "react"
import { nameCheckFunc, passCheckFunc, emailCheckFunc } from "./Regex"
import LoginForm from "./LoginForm"

function Register() {
    let regRef = useRef()
    let [isRegister, setRegister] = useState(true)
    let [nameValid, setnameValid] = useState(true)
    let [emailValid, setemailValid] = useState(true)
    let [passValid, setPassValid] = useState('')
    let errortext = "Input invalid"
    function submitFunc(e) {
        e.preventDefault()
        let isNameValid = nameCheckFunc(regRef.current[0].value)
        let isEmailValid = emailCheckFunc(regRef.current[1].value)
        let isPassValid = passCheckFunc(regRef.current[2].value)
        setnameValid(isNameValid)
        setemailValid(isEmailValid)
        setPassValid(isPassValid)
        if (isNameValid && isEmailValid && isPassValid == " ") {
            let user =
            {
                userName: regRef.current[0].value,
                userEmail: regRef.current[1].value,
                userPassword: regRef.current[2].value
            }
            console.log(user)
            let users = JSON.parse(sessionStorage.getItem("users")) || []
            console.log(users)

            if (!users.find((i) => i.userEmail === user.userEmail)) {
                users.push(user)
                sessionStorage.setItem("users", JSON.stringify(users))
                console.log(users)
                alert("Successfully registerd")
                setTimeout(() => {
                    setRegister(false)
                }, 1000)

            }
            else {
                alert("The user already exist")
                setTimeout(() => {
                    setRegister(false)
                }, 1000)
            }
        }
        else return;


    }

    return (
        <>
            {
                isRegister &&
                <div>
                    
                    <form ref={regRef} className="card">
                        <h3>Register Form</h3>
                        <label >User Name</label>
                        <input type="text" />
                        {
                            !nameValid && <p>{errortext}</p>
                        }
                        <br />
                        <label >Email</label>
                        <input type="email" />
                        {!emailValid && <p>{errortext}</p>}
                        <br />
                        <label >Password</label>
                        <input type="password" />
                        {<p >{passValid}</p>}
                        <button type="submit" onClick={submitFunc}>submit</button>
                    </form>
                </div>

            }
            {!isRegister && <LoginForm />}
        </>

    )
}

export default Register