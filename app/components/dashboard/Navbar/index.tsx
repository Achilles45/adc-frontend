"use client"

import styles from "./nav.module.scss"
import { HiMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import avater from "../../../../public/assets/avatar.svg"
import Link from "next/link";
import { MdOutlineDashboardCustomize, MdManageAccounts, MdNotificationsActive } from "react-icons/md";
import { useState } from "react";

// interface navProps {
//     toggleMenu: () => void
// }

const DashboardNavbar = () => {
  const [ showLinksModal, setShowLinksModal ] = useState(false)

  const toggleShowLinkModal = () => {
    setShowLinksModal(!showLinksModal)
  }

  return (
    <div className={ styles["nav"] }>
       <div className={ styles["nav__left"] }>
            <h4>Welcome, Achilles</h4>
       </div>
       <div className={ styles["nav__right"] }>
      { showLinksModal ?    <div className={ styles["nav__right__helper"] }>
          <div className={ styles["nav__right__helper--header"] }>
            <div>
              <h3>Achilles Usuoyibo</h3>
              <p>achillesusuoyibo7@gmail.com</p>
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
        <p>achillesusuoyibo7@gmail.com</p>
        <span onClick={ toggleShowLinkModal }><HiMenuAlt3 size="1.5rem" color="#343434" style={{ cursor: "pointer" }} /></span>
       </div>
    </div>
  )
}

export default DashboardNavbar