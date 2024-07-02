"use client"

import styles from "./account.module.scss"
import PageIntro from "@/app/components/dashboard/PageIntro"
import { useState } from "react"
import Image from "next/image"
import user from "../../../public/assets/user.png"

const Account = () => {
    const [toggleActive, setTogglActive] = useState(1)

    const toggleActiveState = (key: number): void => {
        setTogglActive(key)
    }

  return (
    <div className={ styles["account"] }>
        <PageIntro title="Your Account" description="Manage your account profile seamlessly today!" />

        <div className={ styles["account__banner"] }>
            <div className={ styles["account__banner__thumbnail"] }>
                <Image src={ user } alt="" height={ 100 } width={ 100 } />
            </div>
            <h3>Achilles Usuoyibo</h3>
            <p>achillesusuoyibo7@gmail.com</p>
            <div className={ styles["account__banner__btn"] }>Verify Account</div>
        </div>
        <div className={ styles["account__tab"] }>
          <div onClick={ () => toggleActiveState(1) } className={ toggleActive === 1 ? styles["account__tab--item--active"] : styles["account__tab--item"] }>Account Profile</div>

          <div onClick={ () => toggleActiveState(2) } className={ toggleActive === 2 ? styles["account__tab--item--active"] : styles["account__tab--item"] }>Change Password</div>

          <div onClick={ () => toggleActiveState(3) } className={ toggleActive === 3 ? styles["account__tab--item--active"] : styles["account__tab--item"] }>Transaction Password</div>

          <div onClick={ () => toggleActiveState(4) } className={ toggleActive === 4 ? styles["account__tab--item--active"] : styles["account__tab--item"] }>Payment Settings</div>
        </div>
    </div>
  )
}

export default Account