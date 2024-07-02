"use client"

import React from 'react'
import styles from "./bottom-bar.module.scss"
import Link from 'next/link'
import { MdOutlineDashboardCustomize, MdManageAccounts, MdNotificationsActive } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { RiBubbleChartFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";;
import { usePathname } from 'next/navigation';


const BottomBar = () => {
    const pathname = usePathname()
    const basePath = "/dashboard"
  return (
    <div className={ styles["bottom__bar"] }>
        <Link href="/dashboard/home" className={ pathname === `${basePath}/home` ? styles["active"] : styles["link"] }>
            <span><MdOutlineDashboardCustomize /></span>
            <p>Home</p>
        </Link>

        <Link href="/dashboard/savings" className={ pathname === `${basePath}/savings` ? styles["active"] : styles["link"] }>
            <span><IoBagCheck /></span>
            <p>Save</p>
        </Link>

        <Link href="/dashboard/portfolio" className={ pathname === `${basePath}/portfolio` ? styles["active"] : styles["link"] }>
            <span><RiBubbleChartFill /></span>
            <p>Invest</p>
        </Link>

        <Link href="/dashboard/account" className={ pathname === `${basePath}/account` ? styles["active"] : styles["link"] }>
            <span><MdManageAccounts /></span>
            <p>Account</p>
        </Link>

        {/* <Link href="/dashboard/transactions" className={ pathname === `${basePath}/transactions` ? styles["active"] : styles["link"] }>
            <span><FaCodeBranch /></span>
            <p>Transactions</p>
        </Link> */}
        {/* <Link href="/dashboard/notifications" className={ pathname === `${basePath}/notifications` ? styles["active"] : styles["link"] }>
            <span><MdNotificationsActive /></span>
            <p>Notice</p>
        </Link> */}
    </div>
  )
}

export default BottomBar