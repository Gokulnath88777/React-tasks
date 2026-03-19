import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn } from "lucide-react"
import { useContext, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "./AuthProvider"

function LoginForm() {
  let { login, LoginFunc } = useContext(AuthContext)
  let userName = useRef()
  let navigate = useNavigate()
  function handleClick() {
    if(userName.current.value!="")
    {
    LoginFunc(userName.current.value)
    navigate("/dashboard")
    }
    else
    {
      toast.error("Please enter name")
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent>

        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="userName">User Name</Label>
            <Input
              id="userName"
              type="text"
              ref={userName}
            />
          </div>
        </div>
        <Button type="button" onClick={handleClick} className="w-full">
          Login
        </Button>

      </CardContent>
      <CardFooter className="flex-col gap-2">

      </CardFooter>
    </Card>
    </div>
  )
}

export default LoginForm