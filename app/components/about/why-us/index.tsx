import styles from "./why.module.scss"
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { SiSimplenote } from "react-icons/si";
import { IoIosApps, IoMdNotificationsOff } from "react-icons/io";

const WhyUs = () => {
  return (
    <div className={ styles["why"] }>
        <div className="container">
            <div className={ styles["why__header"] }>
                <h1>Join us today and predictably build your finances today!</h1>
            </div>
            <div className={ styles["why__grid"] }>
                <div className={ styles["why__grid__item"] }>
                    <MdOutlineSecurity size="2.5rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>Safety of funds</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>

                <div className={ styles["why__grid__item"] }>
                    <BsBarChartFill size="2.3rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>Competitive ROI</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>

                <div className={ styles["why__grid__item"] }>
                    <MdOutlineSupportAgent size="2.5rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>24/7 Customer Care</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>

                <div className={ styles["why__grid__item"] }>
                    <SiSimplenote size="2.5rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>Seamless Onboarding</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>

                <div className={ styles["why__grid__item"] }>
                    <IoIosApps size="2.5rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>Intuitive App UI/UX</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>

                <div className={ styles["why__grid__item"] }>
                    <IoMdNotificationsOff size="2.5rem" />
                    <div className={ styles["why__grid__item--body"] }>
                        <h2>Real time Notifications</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo cumque iusto non, vero debitis nisi consequuntur. Pariatur dicta odit nobis?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs