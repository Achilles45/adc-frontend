import styles from "./notice-card.module.scss"
import { MdNotificationsActive } from "react-icons/md"

interface noticeProps {
    message: {
        title: string;
        details: string;
    }
}

const NotificationCard:React.FC<noticeProps> = ({ message }) => {
  return (
    <div className={ styles["notice__card"] }>
        <div className={ styles["notice__card__icon"] }>
            <MdNotificationsActive />
        </div>
        <div className={ styles["notice__card__text"] }>
            <h5>{ message?.title }</h5>
            <p>{ message?.details }</p>
        </div>
    </div>
  )
}

export default NotificationCard