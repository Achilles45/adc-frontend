import styles from "./hero.module.scss"
import Image from "next/image"
import save from "../../../../public/assets/hero-img.svg"
import LinkButton from "../../shared/LinkButton"
import Link from "next/link"
import { HiArrowRight } from 'react-icons/hi'
import { MdNotifications } from "react-icons/md";

const Herosection = () => {
  return (
    <div className={ styles["hero"] }>
        <div className="container">
            <div className={ styles["hero__content"] }>
                <div className={ styles["hero__content__text"] }>
                <div className={ styles["hero__content__text__helper"] }>
                <span className={ styles["hero__content__text__helper--title"] }><MdNotifications size="1.1rem" /></span>
                <span><Link href="" className={ styles["hero__content__text__helper--text"] }> &nbsp; Launching savings & investments that just works</Link></span> 
            </div>
                    <h1>A simple way to save and invest</h1>
                    <p>Create savings plans that suits your goals and securely diversify your investment portfolio with well designed investment securities.</p>
                    <div className={ styles["hero__content__text__buttons"] }>
                        <LinkButton type='primary' label='Become an ADC member today' path="sign-up" />
                        <LinkButton type='secondary' label='Contact sales' path="contact" />
                    </div>
                </div>
                <div className={ styles["hero__content__thumbnail"] }>
                    <Image width={ 550 } height={ 300 } src={ save } alt="save thumbnail" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection