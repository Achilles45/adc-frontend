import React from 'react'
import styles from "./banner.module.scss"
import LinkButton from '../LinkButton'
import Image from 'next/image'
import stroke from "../../../../public/assets/stroke.webp"

const Banner = () => {
  return (
    <div className={ styles["banner"] }>
        <div className="container">
        <div className={ styles["banner__content"] }>
            {/* <div className={ styles["banner__content__img"] }>
                <Image src={ stroke } alt='Stroke svg' />
            </div> */}
            <div className={ styles["banner__content__text"] }>
                <div className={ styles["banner__content__text__details"] }>
                <h3>Partner with us to start creating wealth everyday to truly give you the life of options that you deserve. It is very easy to get started.</h3>
                    <div className={ styles["banner__content__text--button"] }>
                    <LinkButton path='/auth/sign-up' type='secondary' label='Create a free account today' />
                  </div>
                  </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner