import styles from "./save.module.scss"
import Navbar from "../components/shared/Navbar"
import PageIntro from "../components/shared/PageIntro"
import WhySave from "../components/save/WhySave"
import Banner from "../components/shared/Banner"
import Footer from "../components/shared/Footer"
import Savings from "../components/save/savings"
import Onboarding from "../components/shared/Onboarding"

const Save = () => {
  return (
    <div className={ styles["save"] }>
        <Navbar />
        <PageIntro title="Seamless savings that just works" description="Create as many fixed savings plans you want and earn monthly returns of 7% on each plan. Go to sleep and let your money work for you." />
        <Savings />
        <WhySave />
        <Onboarding />
        <Banner />
        <Footer />
    </div>
  )
}

export default Save