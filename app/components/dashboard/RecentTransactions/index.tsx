import styles from "./recent-transactions.module.scss"
import TransactionCard from "../TransactionCard"
import Link from "next/link"

const RecentTransactions = () => {
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
  return (
    <div className={ styles["recent__transactions"] }>
        <div className={ styles["recent__transactions__header"] }>
            <h3>Recent Transactions</h3>
            <p>Track your transactions today!</p>
        </div>
        <div className={ styles["recent__transactions__transactions"] }>
         { transactions?.map((transaction) => (
           <TransactionCard transaction={transaction} />
         )) }
          <br />
          <Link href="/dashboard/transactions">See all transactions</Link>
        </div>
    </div>
  )
}

export default RecentTransactions