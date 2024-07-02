import styles from "./kyc-warnings.module.scss"
import Link from "next/link"

const KycWarnings = () => {
  return (
    <div className={ styles["kyc__warnings"] }>
        <h3>Yet to verify KYC?</h3>
        <p>Please, kindly submit only valid and related documents for kyc verification else your account will be suspended.</p>
        <Link href="">Complete KYC Verification</Link>
    </div>
  )
}

export default KycWarnings