import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import { Card } from './components/ui/card'

function DashBoard() {
  let { loginDetails } = useContext(AuthContext)

  return (
    <div className="min-h-screen bg-muted/40">

      <Card className="rounded-none border-b shadow-sm">
        <nav className="flex items-center justify-between px-6 py-4">
          <h3 className="text-2xl md:text-3xl font-bold">
            Dashboard
          </h3>
          <div className="flex items-center gap-6 text-sm md:text-base font-medium">

            <Link
              to="/dashboard/course"
              className="hover:text-primary transition"
            >
              Courses
            </Link>

            <Link
              to="/dashboard/saved"
              className="hover:text-primary transition"
            >
              Saved
            </Link>

            <Link
              to="/dashboard/profile"
              className="hover:text-primary transition"
            >
              Profile
            </Link>
            
          </div>
        </nav>
      </Card>
      <div className="p-6 md:p-10">
        <Outlet />
      </div>

    </div>
  )
}

export default DashBoard