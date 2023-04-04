import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../index.css'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

interface LayoutProp {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProp) {
  return (
    <>
      <div className="flex relative min-w-full max-w-fit font-body">
        <Sidebar />
        <div className="w-full bg-dashboardBg min-h-full">
          <Navbar />
        </div>
      </div>
      <Outlet/>
    </>
  )
}
