import React from 'react'
import styles from "./support.module.scss"
import Image from 'next/image'
import freelancer from "../../../../public/assets/freelancer.webp"
import LinkButton from '../LinkButton'

const Support = () => {
  return (
    <div className={ styles["tools"] }>
        <div className="container">
            <div className={ styles["tools__content"] }>
                <Image src={ freelancer } alt='Freelancer' />
                <div className={ styles["tools__content__text"] }>
                    <div>
                        <h1>24/7 Customer Support</h1>
                        <p>Our customer support team is at the base of our work. We provide you with clarity anytime you need one regarding our savings and investments.</p>
                        <LinkButton type='primary' label='Contact customer care' path='/contact'  />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support