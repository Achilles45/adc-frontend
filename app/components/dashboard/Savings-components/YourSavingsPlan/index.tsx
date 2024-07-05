import styles from "./savings-plan.module.scss"
import PageIntro from "../../PageIntro"

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
        {/* <div className={ styles["savings__plans__header"] }>
            <h3>Your Savings Plans</h3>
            <p>These are your created savings plans.</p>
        </div> */}
        <PageIntro title="Your Savings Plans" description="These are your created savings plans" />
        <div className={ styles["savings__plans__grid"] }>
            { savingsPlans ? savingsPlans?.map((savingsPlan: any) => (
                <div className={ styles["savings__plans__grid__item"] }>
                    <div className={ styles["savings__plans__grid__item__top"] }>
                       <div>
                            <h3>{ savingsPlan?.name }</h3>
                            <h5>Created: June 1st, 2024</h5>
                       </div>
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