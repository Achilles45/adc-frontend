import styles from "./user-notice.module.scss"
import NotificationCard from "../NotificationCard"

const UserNotifications = () => {
  const messages = [
    {
      id: 1,
      title: "Account Activation",
      details: "Your kyc was accepted and your account has been activated"
    },
    {
      id: 2,
      title: "Investment confirmcation",
      details: "Your just bought an investment package and it has started running successfully"
    },
    {
      id: 1,
      title: "Successful Deposits",
      details: "Your deposits of #200,000 was successful"
    }
  ]
  return (
    <div className={ styles["user__notice"] }>
      <div className={ styles["user__notice__header"] }>
        <h3>In app Messages</h3>
        <p>Get feedback as they happen today!</p>
      </div>

      <div className={ styles["user__notice__grid"] }>
         { messages ? messages?.map((message) => (
          <NotificationCard key={ message?.id } message={ message } />
         )) : null }
      </div>
    </div>
  )
}

export default UserNotifications