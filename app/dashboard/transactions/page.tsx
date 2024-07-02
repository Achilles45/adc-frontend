"use client"

import styles from "./tranactions.module.scss"
import Image from "next/image"
import savings from "../../../public/assets/savings.png"
import Link from "next/link"
import PageIntro from "@/app/components/dashboard/PageIntro"
import { useState } from "react"
import TransactionCard from "@/app/components/dashboard/TransactionCard"

const Transactions = () => {
    const transactions = [
        {
          id: 1, 
          type: "credit",
          amount: 202000,
          date: "20th June, 2024"
        },
        {
          id: 2, 
          type: "credit",
          amount: 202000,
          date: "20th June, 2024"
        },
        {
          id: 3, 
          type: "debit",
          amount: 102000,
          date: "20th June, 2024"
        },
        {
          id: 4, 
          type: "credit",
          amount: 202000,
          date: "20th June, 2024"
        },
        {
          id: 1, 
          type: "debit",
          amount: 207396,
          date: "20th June, 2024"
        }
      ]

    const [toggleActive, setTogglActive] = useState(1)

    const toggleActiveState = (key: number): void => {
        setTogglActive(key)
    }

  return (
    <div className={ styles["transactions"] }>
        <PageIntro title="Manage Transactions" description="Track all your transactions today!" />
         <div className={ styles["transactions__balance"] }>
            <div className={ styles["transactions__balance__thumbnail"] }>
                <Image src={ savings } height={100} width={100} alt="savings thumbnail"/>
            </div>
            <div className={ styles["transactions__balance__top"] }>
                <h4>Account Balance</h4>
                <h2>&#8358;1,850,850.00</h2>
            </div>
            <div className={ styles["transactions__balance__bottom"] }>
               <Link className={ styles["transactions__balance__bottom--new"] } href="">Withdraw Funds</Link>
            </div>
        </div>

        <div className={ styles["transactions__transactions"] }>
            <h3>Your Transactions</h3>
            <p>Make sense of your transactions details</p>

            <div className={ styles["transactions__transactions__tab"] }>
                <div onClick={ () => toggleActiveState(1) } className={ toggleActive === 1 ? styles["transactions__transactions__tab--item--active"] : styles["transactions__transactions__tab--item"] }>All Transactions</div>

                <div onClick={ () => toggleActiveState(2) } className={ toggleActive === 2 ? styles["transactions__transactions__tab--item--active"] : styles["transactions__transactions__tab--item"] }>Deposits</div>

                <div onClick={ () => toggleActiveState(3) } className={ toggleActive === 3 ? styles["transactions__transactions__tab--item--active"] : styles["transactions__transactions__tab--item"] }>Withdrawals</div>
            </div>

            { transactions?.map((transaction) => (
           <TransactionCard transaction={transaction} />
         )) }
        </div>
    </div>
  )
}

export default Transactions