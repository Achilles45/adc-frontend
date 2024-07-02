import styles from "./intro.module.scss"
import { FaChartArea } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const Intro = () => {
  return (
    <div className={ styles["intro"] }>
      <div className="container">
        <div className={ styles["intro__header"] }>
          <h2>Effortlessly save and diversify your investment portfolio with our well designed and secured securities to give you a life of options that you truly deserve. Yes, it has never been this easy and simple.</h2>
        </div>
        <div className={ styles["intro__grid"] }>
          <div className={ styles["intro__grid__item"] }>
            <div className={ styles["intro__grid__item--icon1"] }>
              <FaChartArea color="#67C985" size="2rem" />
            </div>
            <div className={ styles["intro__grid__item--text"] }>
              <h3>Competitive returns</h3>
              <p>Our interest rates on savings and investment are competitive and among the best you can get on the market today. </p>
            </div>
          </div>

          <div className={ styles["intro__grid__item"] }>
            <div className={ styles["intro__grid__item--icon2"] }>
              <MdSecurity color="#BD8623" size="2rem"  />
            </div>
            <div className={ styles["intro__grid__item--text"] }>
              <h3>Bank grade security</h3>
              <p>We implement industry standard security measures and protocols to make sure your data is safe and secured always. </p>
            </div>
          </div>

          <div className={ styles["intro__grid__item"] }>
            <div className={ styles["intro__grid__item--icon3"] }>
              <RiCustomerService2Fill color="#3086FF" size="2rem" />
            </div>
            <div className={ styles["intro__grid__item--text"] }>
              <h3>24/7 customer care</h3>
              <p>Our customer support team is always handy to respond to all your queries in real time. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro