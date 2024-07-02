import styles from "./savings-plan.module.scss"

// interface savingPlan {
//     id: number;
//     name: string;
//     balance: string
// }

const YourSavingsPlans = () => {
    const savingsPlans = [
        {
            id: 1,
            name: "House Rent",
            balance: 250000
        },
        {
            id: 2,
            name: "Marriage",
            balance: 250000
        },
        {
            id: 3,
            name: "Relocation",
            balance: 250000
        }
    ]
  return (
    <div className={ styles["savings__plans"] }>
        <div className={ styles["savings__plans__header"] }>
            <h3>Your Savings Plans</h3>
            <p>These are your created savings plans.</p>
        </div>
        <div className={ styles["savings__plans__grid"] }>
            { savingsPlans ? savingsPlans?.map((savingsPlan: any) => (
                <div className={ styles["savings__plans__grid__item"] }>
                    <div className={ styles["savings__plans__grid__item__top"] }>
                        <h3>{ savingsPlan?.name }</h3>
                        <h3>&#8358;{ savingsPlan?.balance.toLocaleString("en-US") }</h3>
                    </div>
                    <span>Fund Plan</span>
                </div>
            )) : <div></div> }
        </div>
    </div>
  )
}

export default YourSavingsPlans