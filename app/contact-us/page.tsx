import Navbar from "../components/shared/Navbar"
import PageIntro from "../components/shared/PageIntro"
import Banner from "../components/shared/Banner"
import Footer from "../components/shared/Footer"
import styles from "./contact.module.scss"
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <div className={ styles["contact"] }>
        <Navbar /> 
        <PageIntro title="24/7 Customer Support" description="At the base of our operations is our top notch customer success team that is super ready to respond to all your queries in real time." />
        <div className="container">
        <div className={ styles["contact__grid"] }>
            <div className={ styles["contact__grid__item"] }>
                <RiHomeOfficeFill size="1.3rem" />
                <div className={ styles["contact__grid__item--body"] }>
                    <h2>Office Address</h2>
                    <p>Royal building, Lekki-Ekpe Expressway, Ajiwe-Ajah, Lagos State, Nigeria</p>
                </div>
            </div>

            <div className={ styles["contact__grid__item"] }>
                <FaPhone size="1.3rem" />
                <div className={ styles["contact__grid__item--body"] }>
                    <h2>Phone</h2>
                    <p>+234 810 000 0000</p>
                </div>
            </div>

            <div className={ styles["contact__grid__item"] }>
                <MdMarkEmailRead size="1.3rem" />
                <div className={ styles["contact__grid__item--body"] }>
                    <h2>Support Email</h2>
                    <p>hello@adc.com</p>
                </div>
            </div>
        </div>
        </div>
        <Banner />
        <Footer />
    </div>
  )
}

export default Contact