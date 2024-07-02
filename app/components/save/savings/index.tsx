import styles from "./savings.module.scss"
import SavingsCard from "../SavingsCard"

const Savings = () => {
  return (
    <div className={ styles["savings"] }>
        <div className="container">
            <div className={ styles["savings__header"] }>
                <h1>See our savings plans</h1>
                <p>Slowly but surely, build wealth through savings. Seamlessly and securedly save and earn high ROI today. It is very easy to get started.</p>
            </div>
            <div className={ styles["savings__grid"] }>
                <SavingsCard duration="Six months" minAmount="50,000" roi={10}  />
                <SavingsCard duration="Twelve months" minAmount="100,000" roi={35}  />
            </div>
        </div>
    </div>
  )
}

export default Savings