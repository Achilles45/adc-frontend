import styles from "./invest.module.scss"
import Navbar from "../components/shared/Navbar"
import PageIntro from "../components/shared/PageIntro"
import Plans from "../components/invest/Plans"
import Banner from "../components/shared/Banner"
import Footer from "../components/shared/Footer"
import InvestCalculator from "../components/invest/InvestCalculator"
import Onboarding from "../components/shared/Onboarding"

const Invest = () => {
  return (
    <div className={ styles["invest"] }>
        <Navbar />
        <PageIntro title="Simple & secured investments" description="Invest seamlessly today in our well vetted investment plans and earn up to 35% ROI for a duration of 6 months or 12 months. " />
        <Plans />
        <InvestCalculator />
        <Onboarding />
        <Banner />
        <Footer />
    </div>
  )
}

export default Invest