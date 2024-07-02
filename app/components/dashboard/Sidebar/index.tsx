"use client"

import styles from "./sidebar.module.scss"
import Image from "next/image"
import logo from "../../../../public/assets/logo.png"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MdOutlineDashboardCustomize, MdManageAccounts, MdNotificationsActive } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import { RiBubbleChartFill } from "react-icons/ri";
import { FaCodeBranch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { BiLogOutCircle } from "react-icons/bi";

interface linkProps {
  path: string;
  label: string;
  icon: any
}

export const SidebarLink:React.FC<linkProps> = ({
  path,
  label,
  icon
}) => {
  const basePath = "/dashboard"
  const pathname = usePathname()
  return (
    <Link
      className={ pathname === `${basePath}/${path}` ? styles["active"] : styles["link"] }
      href={ `${ basePath }/${ path }` }>
      { icon }{ label }
    </Link>
  )
}

const Sidebar = () => {
  return (
    <div className={ styles["sidebar"] }>
      <div className={ styles["sidebar__logo"] }>
        <Link href="/">
          <Image src={ logo } height={ 100 } width={ 100 } alt="ADC logo" />
        </Link>
      </div>
      <div className={ styles["sidebar__links"] }>
          <SidebarLink 
            path="home" 
            label="Dashboard Home" 
            icon={<MdOutlineDashboardCustomize size="1.3rem" />} 
          />

          <SidebarLink 
            path="savings" 
            label="Savings" 
            icon={<IoBagCheck size="1.3rem" />} 
          />

          <SidebarLink 
            path="portfolio" 
            label="Investments" 
            icon={<RiBubbleChartFill size="1.3rem" />} 
          />

            <SidebarLink 
            path="account" 
            label="My Account" 
            icon={<MdManageAccounts size="1.3rem" />} 
          />

          <SidebarLink 
            path="transactions" 
            label="My Transactions" 
            icon={<FaCodeBranch size="1.3rem" />} 
          />

            <SidebarLink 
            path="notifications" 
            label="Notifications" 
            icon={<MdNotificationsActive size="1.3rem" />} 
          />

            {/* <SidebarLink 
            path="payment-settings" 
            label="Payment Settings" 
            icon={<LuSettings2 size="1.3rem" />} 
          /> */}

            <SidebarLink 
            path="payment-settings" 
            label="Logout" 
            icon={<BiLogOutCircle size="1.3rem" />} 
          />
      </div>
    </div>
  )
}

export default Sidebar