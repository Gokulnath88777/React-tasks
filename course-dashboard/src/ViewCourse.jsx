import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { useContext, useEffect, useState } from "react"
import { enrolledContext } from "./EnrolledProvider"
import { useNavigate, useParams } from "react-router-dom"
import { purchaseContext } from "./PurchaseProvider"

function ViewCourse() {
    let { enrolled, handleEnrolled } = useContext(enrolledContext)
    let { id } = useParams()
    let [view, setView] = useState(null)
    let { purchased, handlePurchased } = useContext(purchaseContext)
    let navigate = useNavigate()
    useEffect(() => {
        const getCourse = async () => {
            const data = await fetch("http://localhost:3000/categories")
            const response = await data.json()
            let oneCourse;

            for (let cat of response) {
                const found = cat.courses.find(c => c.id == id);
                if (found) {
                    oneCourse = found;
                    break;
                }
            }
            setView(oneCourse)
            console.log(oneCourse);
        }
        getCourse()
    }, [])
    function handleClick() {
        navigate(-1)
    }
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">

            <Button variant="ghost" onClick={handleClick} className="mb-4">
                ⬅️ Back
            </Button>
            {
                view ? <Card className="rounded-2xl shadow-md">

                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="text-2xl">
                                {view.title}
                            </CardTitle>
                            <Badge variant="secondary">{view.level}</Badge>
                            <Button size="lg" onClick={() => handleEnrolled(view)} disabled={enrolled && enrolled.find(enrollCourse => enrollCourse.title === view.title)}>
                                {enrolled && enrolled.find(enrollCourse => enrollCourse.title == view.title) ? "Enrolled" : "Enroll Now"}

                            </Button>
                            <Button size="lg" onClick={() => handlePurchased(view)} disabled={purchased && purchased.find(purchase => purchase.title == view.title)}>{purchased && purchased.find(purchase => purchase.title == view.title) ? "Purchased" : "Purchase"}</Button>
                        </div>

                        <CardDescription className="mt-2">
                            Instructor: <span className="font-medium">{view.instructor}</span>
                        </CardDescription>

                        <p className="text-sm text-muted-foreground">
                            {view.duration}
                        </p>
                    </CardHeader>


                    <CardHeader>
                        <CardTitle>Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">
                            {view.description}  </p>
                    </CardContent>
                    <CardHeader>
                        <CardTitle>Syllabus</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            {view.syllabus.map(topics => <li>{topics}</li>)}
                        </ul>
                    </CardContent>
                </Card> : <h3>No Course</h3>
            }

            <div className="flex justify-end">

            </div>

        </div>
    )
}
export default ViewCourse