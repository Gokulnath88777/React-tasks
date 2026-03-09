import { useRef, useState } from "react";
import Form from "./Register";
import { emailCheckFunc, loginPass } from "./Regex"
function LoginForm() {
    let logRef = useRef()
    let [isLogin, setLogin] = useState(true)
    let [isemailValid, setemailValid] = useState(true)
    let [isPassValid, setPassValid] = useState(true)

    function registerPage() {
        setLogin(false)
    }
    function loginFunc(e) {
        e.preventDefault()

        let isEmail = emailCheckFunc(logRef.current[0].value)
        let isPassword = loginPass(logRef.current[1].value)
        setemailValid(isEmail)
        setPassValid(isPassword)
        if (isEmail && isPassword) {
            console.log("emailChecked")
            let users = JSON.parse(sessionStorage.getItem("users")) || []

            console.log(users)
            console.log(logRef.current[0].value);
            let value = users.find((i) => i.userEmail === logRef.current[0].value);
            if (value) {
                if (value.userPassword === logRef.current[1].value)
                    alert("login Successfully")
                else alert("Your password is incorrect")
            }
            else {
                alert("You dont have account")

                setTimeout(() => setLogin(false), 1000)
            }
        }

    }
    return (
        <>
            {

                isLogin &&


                <form ref={logRef} className="card">
                    <h3>Login Form</h3>
                    <label >Email</label>
                    <input type="email" />
                    {!isemailValid && <p>Invalid Input</p>}
                    <br />
                    <label >Password</label>
                    <input type="password" autoComplete="off" required />
                    {!isPassValid && <p>Invalid Input</p>}
                    <br />
                    <button type="submit" onClick={loginFunc}>Submit</button>
                    <br />
                    <span>Don't have an Account <button onClick={registerPage}>Register</button></span>
                </form>



            }
            {
                !isLogin && <Form />
            }
        </>
    )
}

export default LoginForm