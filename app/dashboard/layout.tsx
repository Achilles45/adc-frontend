"use client"

import styles from "./layout.module.scss"
import Sidebar from "../components/dashboard/Sidebar"
import DashboardNavbar from "../components/dashboard/Navbar"
import { ReactNode } from "react"
import RightSideBar from "../components/dashboard/RightSideBar"
import BottomBar from "../components/dashboard/BottomBar"

interface dashProps {
    children: ReactNode
}

const DashboardLayout: React.FC<dashProps>= ({ children }) => {

  return (
    <div className={ styles["layout"] }>
        <div className={ styles["layout__bottombar"] }>
            <BottomBar />
        </div>
        <div className={ styles["layout__sidebar"] }>
            <Sidebar />
        </div>
        <div className={ styles["layout__content"] }>
            <div className={ styles["layout__content__navbar"] }>
                <DashboardNavbar />
            </div>
            <div className={ styles["layout__content--children"] }>
                { children }
                <div className={ styles["layout__content--children--rightbar"] }>
                    <RightSideBar />
                </div>
            </div>
        </div>
        {/* <div>
            <RightSideBar />
        </div> */}
    </div>
  )
}

export default DashboardLayout