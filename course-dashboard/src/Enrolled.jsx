import React, { useContext } from 'react'
import { enrolledContext } from './EnrolledProvider'
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

function Enrolled() {
  let navigate = useNavigate()
  let { enrolled,handleRemove } = useContext(enrolledContext)

  function handleClick() {
    navigate(-1)
  }

  return (
    <div className="p-4">
      
      <Button variant="ghost" onClick={handleClick} className="mb-4">
        ⬅️ Back
      </Button>

      {
        enrolled? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolled.map((course, index) => (
              
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

                <CardFooter className="flex justify-between">
                  <Button>Enrolled</Button>
                  <Button onClick={()=>handleRemove(course)}>Remove Enroll</Button>
                </CardFooter>

              </Card>
            ))}
          </div>

        ) : (

       
            <h1 className="text-2xl font-semibold text-muted-foreground">
              No enrolled courses
            </h1>
     
        )
      }

    </div>
  )
}

export default Enrolled