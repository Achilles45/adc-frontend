import KycWarnings from "../KycWarning"
import TransactionPasswordWarning from "../TransactionPasswordWarning"
import styles from "./right-bar.module.scss"

const RightSideBar = () => {
  return (
    <div className={ styles["rightbar"] }>
        <TransactionPasswordWarning />
        <KycWarnings />
    </div>
  )
}

export default RightSideBar