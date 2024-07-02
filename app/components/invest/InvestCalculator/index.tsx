import styles from "./calculator.module.scss"
import Calculator from "../../shared/Calculator"

const InvestCalculator = () => {
  return (
    <div className={ styles["calculator"] }>
        <div className="container">
            <div className={ styles["calculator__header"] }>
                <h1>Make informed investment decisions</h1>
                <p>Use the investment calculator to calculate your potential returns on the go. Now you can see how much you will earn in your preferred investment.</p>
            </div>
            <div>
                <Calculator />
            </div>
        </div>
    </div>
  )
}

export default InvestCalculator