
"use client"
import React from 'react'
import styles from "./transaction.module.scss"

const TransactionCard = ({ transaction }) => {

    const { project_name, type, amount, date } = transaction;
    console.log(amount)
    const formattedAmount = Number(amount).toLocaleString("en-US")
  return (
    <div className={ styles["transaction"] }>
        <div>
            <span className={ type === "credit" ? styles["transaction__credit"] : styles["transaction__debit"] }>{ type === "credit" ? "Credit" : "Debit" }</span></div>
        <div className={ styles["transaction__grid2"] }>
            { type === "credit" ? <p>Account credited</p> : <p>Account debited</p> }
            <small>{ date }</small>
        </div>
        <div className={ styles["transaction__grid3"] }>
            <p className={ type === "credit" ? styles["credit"] : styles["debit"] }>&#8358; { Number(amount).toLocaleString("en-US") }</p>
            {/* <small>{ date }</small> */}
        </div>
        <div>
        </div>
    </div>
  )
}

export default TransactionCard