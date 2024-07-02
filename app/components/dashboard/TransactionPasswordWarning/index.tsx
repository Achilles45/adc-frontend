import styles from "./password-warn.module.scss"
import Link from "next/link"

const TransactionPasswordWarning = () => {
  return (
    <div className={ styles["password__warn"] }>
        <h3>Transaction Security</h3>
        <p>Manage your transactions with a secure password. You will need it to carry out all transactions including deposits and withdrawals.</p>
        <Link href="">Manage Transaction Password</Link>
    </div>
  )
}

export default TransactionPasswordWarning