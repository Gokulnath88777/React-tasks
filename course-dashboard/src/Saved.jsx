import React, { useContext } from 'react'
import { savedContext } from './SavedProvider'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { purchaseContext } from './PurchaseProvider'

function Saved() {
  let navigate = useNavigate()
  
  let { saved, handleRemove } = useContext(savedContext)
  let {purchased,handlePurchased}=useContext(purchaseContext)

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className="p-4">

      <Button variant="ghost" onClick={handleClick} className="mb-4">
        ⬅️ Back
      </Button>

      {
        saved ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((course, index) => (

              <Card key={index} className="rounded-2xl shadow-sm hover:shadow-md transition">

                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>
                    {course.instructor}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Duration: {course.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Level: {course.level}
                  </p>
                  <p className="text-sm">
                    {course.description}
                  </p>
                </CardContent>

                <CardFooter className="flex">
                  <Button>saved</Button>
                  <Button onClick={() => handlePurchased(course)} disabled={purchased && purchased.find(purchase => purchase.title == course.title)} >
                    {purchased && purchased.find(purchase => purchase.title == course.title) ? "Purchased" : "Purchase"}</Button>
                  <Button onClick={() => handleRemove(course)}>Remove</Button>
                </CardFooter>

              </Card>
            ))}
          </div>

        ) : (


          <h1 className="text-2xl font-semibold text-muted-foreground">
            No saved courses
          </h1>

        )
      }

    </div>
  )
}

export default Saved