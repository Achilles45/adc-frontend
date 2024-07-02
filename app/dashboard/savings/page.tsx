import styles from "./savings.module.scss"
import PageIntro from "@/app/components/dashboard/PageIntro"
import Link from "next/link"
import Image from "next/image"
import savings from "../../../public/assets/savings.png"
import YourSavingsPlans from "@/app/components/dashboard/Savings-components/YourSavingsPlan"
import RecentTransactions from "@/app/components/dashboard/RecentTransactions"

const Savings = () => {
  return (
    <div className={ styles["savings"] }>
        <PageIntro title="Your Savings" description="See how you are saving towards your goals." />

        <div className={ styles["savings__balance"] }>
            <div className={ styles["savings__balance__thumbnail"] }>
                <Image src={ savings } height={100} width={100} alt="savings thumbnail"/>
            </div>
            <div className={ styles["savings__balance__top"] }>
                <h4>Total Savings</h4>
                <h2>&#8358;850,850.00</h2>
            </div>
            <div className={ styles["savings__balance__bottom"] }>
               <Link className={ styles["savings__balance__bottom--new"] } href="">Create new savings plan</Link>
               <Link className={ styles["savings__balance__bottom--add"] } href="">Top up your savings</Link>
            </div>
        </div>

        <YourSavingsPlans />
        <RecentTransactions />
    </div>
  )
}

export default Savings