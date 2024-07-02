import styles from "./why-save.module.scss"
import WhyCard from "../WhyCard"

const WhySave = () => {
  return (
    <div className={ styles["why__save"] }>
        <div className="container">
            <div className={ styles["why__save__header"] }>
                <h1>Effortlessly Save today and let <span>your savings save you tomorrow</span></h1>
            </div>
            <div className={ styles["why__save__grid"] }>
                <WhyCard 
                    title="Hign interest rates on savings" 
                    description="Our interest rates on savings are highly competitive and very very sustainable. When you make fixed savings, you earn more interest than the traditional bank can offer." 
                />

                <WhyCard 
                    title="Seamless user experience" 
                    description="From the onboarding process to when you are creating your first savings plan, we provide you with amazing user experience across all our platform to make you feel at home always." 
                />

                <WhyCard 
                    title="Safety of funds" 
                    description="At the core of our operations is the subject of safety of the funds of our members. Your savings are insured with our partners to make sure your money is always safe and secured." 
                />
                 <WhyCard 
                    title="Create multiple savings plans" 
                    description="Whether you are saving for relocating abroad, or celebrating your wedding or to build a house, you can create multiple savings plans and enjoy good ROI on all of them." 
                />
            </div>
        </div>
    </div>
  )
}

export default WhySave