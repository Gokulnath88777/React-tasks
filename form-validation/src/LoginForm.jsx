import { useRef, useState } from "react";
import Form from "./Register";
import { emailCheckFunc } from "./Regex"
function LoginForm() {
    let logRef = useRef()
    let [isLogin, setLogin] = useState(true)
    let [isemailValid, setemailValid] = useState(true)

    function registerPage() {
        setLogin(false)
    }
    function loginFunc(e) {
        e.preventDefault()

        let isEmail = emailCheckFunc(logRef.current[0].value)
        setemailValid(isEmail)
        if (isEmail && logRef.current[1]!='') {
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
               
               setTimeout(()=>setLogin(false),1000) 
            }
        }
        else {

        }

    }
    return (
        <>
            {

                isLogin &&
                <form ref={logRef} className="card">

                    <label >Email</label>
                    <input type="email" />
                    {!isemailValid && <p>Invalid Feild is Empty</p>}
                    <br />
                    <label >Password</label>
                    <input type="password" autoComplete="off" required />
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