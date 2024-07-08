import React from 'react'
import styles from "./onboarding.module.scss"
import Link from 'next/link'
import logo from "../../../../public/assets/logo.png";
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa6";

const AuthOnboarding = () => {
  return (
    <div className={ styles["onboarding"] }>
      <div className={ styles["onboarding__logo__section"] }> 
        <h3><Link href="/"><Image src={ logo }  height={100} width={100} alt='ADC logo' /></Link></h3>
      </div>
      <div className={ styles["onboarding__content"] }>
        <div className={ styles["onboarding__content__text"] }>
          <h1>A simple way to save and invest today</h1>
          <p>Create savings plans or choose any investment plans and earn good returns on investments in a predictable manner today!</p>
        </div>
        <div className={ styles["onboarding__content__helper"] }>
          <p> <FaQuoteLeft /> I love the technology incorporated into ADC cooperative alongside good returns on savings and investments. Feels good to be here.</p>
          <h4>Achilles Usuoyibo, ADC Member</h4>
        </div>
      </div>
    </div>
  )
}

export default AuthOnboarding