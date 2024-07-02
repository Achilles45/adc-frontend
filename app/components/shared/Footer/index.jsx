import React from 'react'
import styles from "./new-footer.module.scss"
import Link from 'next/link'
import Image from 'next/image'
import logoImg from "../../../../public/assets/logo.png"

const Footer = () => {
  return (
    <div className={ styles["new__footer"] }>
        <div className="container">
            <div className={ styles["new__footer__content"] }>
             <div className={ styles["new__footer__content__logo"] }>
                <Link href="/"><Image src={ logoImg } height={10} width={100}  alt='ADC Logo'/></Link>
                <p>Africa Development Crowdfund Limited is your partner of choice to help you seamlessly save and invest in well vetted and safe securities. Your money is insured with our partners to make sure you never loss your money.</p>
                </div>
                <div className={ styles["new__footer__content__links"] }>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Quick Links</h5>
                        <ul>
                            <Link href="">Invest</Link>
                            <Link href="/">Save</Link>
                            <Link href="/">Login</Link>
                            <Link href="/">Join ADC today</Link>
                        </ul>
                    </div>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Help</h5>
                        <ul>
                            <a href="mailto: hello@adc.com">hello@adc.com</a>
                            <a href="tel:+2348103515205">+234 810 351 5205</a>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms & Conditions</Link>
                        </ul>
                    </div>
                    <div className={ styles["new__footer__content__links__item"] }>
                        <h5>Office Address</h5>
                        <p>Royal building, Lekki-Ekpe Expressway, Ajiwe-Ajah, Lagos State, Nigeria</p>
                    </div>
                </div>
            </div>
            <br />
            <p className={ styles["new__footer__helper"] }>ADC, built with ♥️ from Africa Development Crowdfund. All Rights Reserved. &copy; 2024</p>
        </div>
    </div>
  )
}

export default Footer