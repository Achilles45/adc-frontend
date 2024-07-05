"use client"

import styles from "./nav.module.scss"
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import avater from "../../../../public/assets/avatar.svg"
import Link from "next/link";
import { MdOutlineDashboardCustomize, MdManageAccounts, MdNotificationsActive } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { authSlice } from "@/redux/selectors";

// interface navProps {
//     toggleMenu: () => void
// }

const DashboardNavbar = () => {
  const [ showLinksModal, setShowLinksModal ] = useState(false)

  const toggleShowLinkModal = () => {
    setShowLinksModal(!showLinksModal)
  }

  const { user } = useSelector(authSlice)
  console.log('User from redux is', user)

  return (
    <div className={ styles["nav"] }>
       <div className={ styles["nav__left"] }>
            <h4>Welcome, { user?.firstname }</h4>
       </div>
       <div className={ styles["nav__right"] }>
      { showLinksModal ?    <div className={ styles["nav__right__helper"] }>
          <div className={ styles["nav__right__helper--header"] }>
            <div>
              <h3>{ user?.firstname} { user?.lastname }</h3>
              <p>{ user?.email }</p>
            </div>
            <hr />
          </div>
          <div className={ styles["nav__right__helper--body"] }>
            <Link href=""><span><MdOutlineDashboardCustomize /></span> My Dashboard</Link>
            <Link href=""> <span><MdManageAccounts /></span> Account Profile</Link>
            <Link href=""> <span><MdNotificationsActive /></span> Notifications</Link>
            <hr />
            <p>Logout</p>
          </div>
        </div> : null }
        <Image src={ avater } alt="profile avatar" />
        <p>{ user?.email }</p>
        <span onClick={ toggleShowLinkModal }><HiMenuAlt3 size="1.5rem" color="#343434" style={{ cursor: "pointer" }} /></span>
       </div>
    </div>
  )
}

export default DashboardNavbar