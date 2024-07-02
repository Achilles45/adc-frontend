import styles from "./plans.module.scss"
import PlanCard from "../PlanCard"

const Plans = () => {
  return (
    <div className={ styles["plans"] }>
        <div className="container">
            <div className={ styles["plans__header"] }>
                <h1>Available investment Opportunities</h1>
                <p>See our vetted investment plans available to members of ADC Cooperative Society. Seamlessly and securedly invest and earn high ROI today.</p>
            </div>
            <div className={ styles["plans__grid"] }>
                <PlanCard duration="Six months" minAmount="100,000" roi={20}  />
                <PlanCard duration="Twelve months" minAmount="500,000" roi={35}  />
            </div>
        </div>
    </div>
  )
}

export default Plans