import styles from "./portfolio.module.scss"
import PageIntro from "@/app/components/dashboard/PageIntro"
import Image from "next/image"
import savings from "../../../public/assets/savings.png"
import Link from "next/link"
import RecentTransactions from "@/app/components/dashboard/RecentTransactions"

const Portfolio = () => {
  return (
    <div className={ styles["portfolio"] }>
        <PageIntro title="Your Investment" description="Track your investment portfolio today!" />

        <div className={ styles["portfolio__balance"] }>
            <div className={ styles["portfolio__balance__thumbnail"] }>
                <Image src={ savings } height={100} width={100} alt="savings thumbnail"/>
            </div>
            <div className={ styles["portfolio__balance__top"] }>
                <h4>Investments Value</h4>
                <h2>&#8358;850,850.00</h2>
            </div>
            <div className={ styles["portfolio__balance__bottom"] }>
               <Link className={ styles["portfolio__balance__bottom--new"] } href="">Buy Investments Units</Link>
            </div>
        </div>

        <RecentTransactions />
    </div>
  )
}

export default Portfolio