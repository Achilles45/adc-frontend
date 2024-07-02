"use client"

import styles from "./calculate.module.scss"
import { useState } from "react"
import { useEffect } from "react"
import CalculatedResults from "../CalculatedResults"


// interface calculateProps {
//     amountq: number
// }

const Calculator = () => {
    const [ formattedAmount, setFormattedAmount ] = useState<any>()
    const [ formatedReturns, setFormatedReturns ] = useState<any>()
    const [results, setResults]= useState<any>(0)

    const [formData, setFormData] = useState<any>({
        amount: 100000,
        duration: 6,
        units: 1
    })

    const { amount, duration, units } = formData;

    //Format entered investment amount
    useEffect(() => {
        setFormattedAmount(Number(amount).toLocaleString("en-US"))
    }, [amount])

    //Handle onChange
    const onChange = (e: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [e.target.id] : e.target.value
        }))
    }

       //Fix interest rates
       const [interest, setInterest] = useState<number>(0)
       const [calculatedReturns, setCalculatedReturns] = useState<number>(0)

       //Calculate returns on investment
       const calculateReturns = () => {
        const formattedDuration = Number(duration)
        const interestRate = duration === 6 ? 10 : 15
        const interestPercentage = interestRate / 100
        const calculatedResults = amount * interestPercentage * units + amount

        setResults(calculatedResults)
       }

       useEffect(() => {
        calculateReturns()
        setFormatedReturns((results).toLocaleString("en-US"))
    }, [amount, duration, units])
    
  return (
    <div className={ styles["calculate"] }>
        <div className={ styles["calculate__header"] }>
            {/* <h3>Amount invested</h3> */}
            <h1><span>&#8358;</span>{ formattedAmount }</h1>
            <form className={ styles["calculate__header__form"] }>
                <div>
                    <label htmlFor="amount">Amount to invest</label>
                    <input
                        id="amount" 
                        type="text"
                        value={ amount }
                        onChange={ onChange }
                     />
                </div>
                <div>
                    <label htmlFor="duration">Select an investment period</label>
                    <select id="duration" value={ duration } onChange={ onChange }>
                        <option value="6">6 Months cycle</option>
                        <option value="12">12 Months cycle</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="units">Enter number(s) of units</label>
                    <input
                        id="units" 
                        type="number"
                        value={ units }
                        onChange={ onChange }
                        />
                </div>
                <div className={ styles["calculate__header__form--btn"] }>Calculate ROI</div>
            </form>
            <CalculatedResults result={formatedReturns} />
        </div>
    </div>
  )
}

export default Calculator