import React from 'react'
import styles from "./onboarding.module.scss"
import Link from 'next/link'
import logo from "../../../../public/assets/logo-white.png";
import icon from "../../../../public/assets/onboarding.svg"
import Image from 'next/image';

const AuthOnboarding = () => {
  return (
    <div className={ styles["onboarding"] }>
      <div className={ styles["onboarding__logo__section"] }> 
        <h3><Link href="/"><Image src={ logo }  height={150} width={150} alt='ADC logo' /></Link></h3>
      </div>
      <div className={ styles["onboarding__image__section"] }>
      <Image src={ icon } width={ 270 } height={ 270 } alt='Onbaording Screen' />
      </div>
      <div className={ styles["onboarding__text"] }>
        <h2>A simple way to save and invest</h2>
        <p>Create savings plans or choose any investment plans and earn good returns on investments in a predictable manner today!</p>
      </div>
    </div>
  )
}

export default AuthOnboarding