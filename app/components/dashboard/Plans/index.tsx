"use client"

import { useState } from "react"
import styles from "./plans.module.scss"
import SingleInvestmentCard from "./SingleInvestmentCard"

const Plans = () => {
  const [toggleActive, setTogglActive] = useState(1)

  const toggleActiveState = (key: number): void => {
    setTogglActive(key)
  }
  return (
    <div className={ styles["plans"] }>
        <div className={ styles["plans__header"] }>
            <h3>Get a share of the pie too!</h3>
            <p>See our investments and savings plan with high ROI</p>
        </div>
        <div className={ styles["plans__tab"] }>
          <div onClick={ () => toggleActiveState(1) } className={ toggleActive === 1 ? styles["plans__tab--item--active"] : styles["plans__tab--item"] }>Investments</div>

          <div onClick={ () => toggleActiveState(2) } className={ toggleActive === 2 ? styles["plans__tab--item--active"] : styles["plans__tab--item"] }>Savings Plans</div>
        </div>
        <div className={ styles["plans__grid"] }>
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Twelve months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Eighteen months" minAmount="100,000" roi={20}  />
          {/* <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  />
          <SingleInvestmentCard duration="Six months" minAmount="100,000" roi={20}  /> */}
        </div>
    </div>
  )
}

export default Plans