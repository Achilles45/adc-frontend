import styles from "./notification.module.scss"
import Image from "next/image"
import savings from "../../../public/assets/savings.png"
import Link from "next/link"
import UserNotifications from "@/app/components/dashboard/UserNotifications"

const Notifications = () => {
  return (
    <div className={ styles["notifications"] }>
        <div className={ styles["notifications__balance"] }>
            <div className={ styles["notifications__balance__thumbnail"] }>
                <Image src={ savings } height={100} width={100} alt="savings thumbnail"/>
            </div>
            <div className={ styles["notifications__balance__top"] }>
                <h2>Your Notifications</h2>
                <p>Manage your in app notifications here!</p>
            </div>
            <div className={ styles["notifications__balance__bottom"] }>
               <Link className={ styles["notifications__balance__bottom--new"] } href="">Contact Customer Care</Link>
            </div>
        </div>

        <UserNotifications />
    </div>
  )
}

export default Notifications