import styles from "./analytics-card-wrapper.module.scss"
import AnalyticsCard from "../AnalyticsCard"
import PageIntro from "../PageIntro"

const AnalyticsCardWrapper = () => {
  return (
    <div className={ styles["analytics"] }>
      <PageIntro title="Dashboard Overview" description="Quickly see your performance today" />

      <div className={ styles["analytics__grid"] }>
        <AnalyticsCard 
              title="Accont Balance"
              value={1756980} 
              type="balance" 
          />
          <AnalyticsCard 
              title="Total Investments"
              value={1100550} 
              type="invest" 
          />          
          <AnalyticsCard 
              title="Total Savings"
              value={850000} 
              type="save" 
          />
      </div>
    </div>
  )
}

export default AnalyticsCardWrapper