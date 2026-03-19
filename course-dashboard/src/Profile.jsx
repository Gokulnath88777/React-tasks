import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { enrolledContext } from './EnrolledProvider'
import { Avatar } from './components/ui/avatar'
import { Badge } from './components/ui/badge'
import { AvatarFallback } from './components/ui/avatar'
import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { purchaseContext } from './PurchaseProvider'
function Profile() {
    let {loginDetails,logoutFunc}=useContext(AuthContext)
  let { enrolled } = useContext(enrolledContext)
  let {purchased}=useContext(purchaseContext)
  return (
   <div className=" bg-muted/40 min-h-screen space-y-6">
    <h3 className="font-bold text-4xl mt-0">My Profile</h3>

      <Card className="flex p-6 rounded-2xl shadow-sm">
        
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarFallback className="bg-primary text-white text-xl font-bold">
              { loginDetails ? loginDetails.charAt(0).toUpperCase():"N/A"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{loginDetails}</h2>
            <p className="text-sm text-muted-foreground">
              Student
            </p>
          </div>
           <Button className='ml-auto justify-end' onClick={logoutFunc}>Logout</Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Enrolled</p>
            <h3 className="text-3xl font-bold">{enrolled ? enrolled.length : 0 }</h3>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Purchased</p>
            <h3 className="text-3xl font-bold">{purchased ? purchased.length:0}</h3>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Courses</p>
            <h3 className="text-3xl font-bold">12</h3>
          </CardContent>
        </Card>      

      </div>
 
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle>Purchased Courses</CardTitle>
        </CardHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {purchased?purchased.map(purchase=>
          <CardContent>
            <Card className="p-4 rounded-xl border hover:shadow-md transition space-y-2">
              <h3 className="font-semibold">{purchase.title}</h3>
              <p className="text-sm text-muted-foreground">{purchase.instructor}</p>
              <Badge>Purchased</Badge>             
            </Card>
          </CardContent>)
          : 
            <h1 className="text-1xl mx-6 font-semibold text-muted-foreground">
              No Purchased Course
            </h1>}
            </div>
          </Card>

    </div>
  
  )
}

export default Profile