import React, { useEffect, useState, useContext, use } from 'react'
import { Input } from "@/components/ui/input"
import { toast } from 'react-toastify'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { enrolledContext } from './EnrolledProvider'
import { Button } from './components/ui/button'
import { useNavigate } from 'react-router-dom'
import PurchaseProvider, { purchaseContext } from './PurchaseProvider'
function Courses() {
    let [allcourse, setAll] = useState([])
    let [course, setCourse] = useState([])
    let { enrolled, enrollFunc, handleEnrolled } = useContext(enrolledContext)
    let { purchased, handlePurchased } = useContext(purchaseContext)
    let courseNavigate = useNavigate()
    useEffect(() => {
        const getCourse = async () => {
            const data = await fetch("http://localhost:3000/categories")
            const response = await data.json()
            setAll(response)
            setCourse(response)
            console.log(response);
        }
        getCourse()
    }, [])
    function handleSearch(e) {
        let value = e.target.value.toLowerCase()
        console.log("function");
        console.log(allcourse);
        if (value == "") { setCourse(allcourse) }

        else {
            const filtered = allcourse.map(catagory => {
                return (
                    {
                        ...catagory,
                        courses: catagory.courses.filter(course => course.title.toLowerCase().includes(value) ||
                            course.instructor.toLowerCase().includes(value))
                    }
                )
            }

            )
            setCourse(filtered)
        }

    }

    function handleView(id) {
        courseNavigate(`/dashboard/viewCourse/${id}`)

    }

    return (
        <>

            <Input
                placeholder="🔍 Search by title or instructor..."
                onChange={handleSearch}
                className=" mx-auto block rounded-xl"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {course.map((catagories) => {
                    return (<>
                        {catagories.courses.map((course) =>

                            <Card size="sm" className="my-4 mx-4 flex-1 max-w-sm">
                                <CardTitle className="mx-5">
                                    {course.title}
                                </CardTitle>
                                <CardDescription className="flex flex-row">
                                    <CardContent>{course.instructor}</CardContent>
                                    <CardContent>{course.duration}</CardContent>
                                    <CardContent>{course.level}</CardContent>
                                </CardDescription>
                                <CardContent>
                                    <p>{course.description}</p></CardContent>
                                <CardFooter className="flex flex-row">
                                    <Button onClick={() => handleEnrolled(course)} disabled={enrolled && enrolled.find(enrollCourse => enrollCourse.title === course.title)}
                                    >
                                        {enrolled && enrolled.find(enrollCourse => enrollCourse.title == course.title) ? "Enrolled" : "Enroll"}
                                    </Button>
                                    <Button onClick={() => handlePurchased(course)} disabled={purchased && purchased.find(purchase => purchase.title == course.title) } >
                                        {purchased && purchased.find(purchase => purchase.title == course.title) ? "Purchased" : "Purchase"}</Button>
                                    <Button onClick={() => handleView(course.id)}>
                                        View Course
                                    </Button>
                                </CardFooter>
                            </Card>
                        )}
                    </>

                    )

                }
                )

                }
            </div>
        </>
    )
}

export default Courses