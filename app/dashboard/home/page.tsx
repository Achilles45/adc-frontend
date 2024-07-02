import styles from "./home.module.scss"
import AnalyticsCardWrapper from '@/app/components/dashboard/AnalyticsCardWrapper'
import Todos from '@/app/components/dashboard/Todos'
import Plans from "@/app/components/dashboard/Plans"
import RecentTransactions from "@/app/components/dashboard/RecentTransactions"

const Overview = () => {
  return (
    <div className={ styles["home"] }>
      <AnalyticsCardWrapper />
      <Todos />
      <Plans />
      <RecentTransactions />
    </div>
  )
}

export default Overview