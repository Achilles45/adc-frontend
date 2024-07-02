import styles from "./page-intro.module.scss"
import Image from "next/image"
import hand from "../../../../public/assets/save-phone.png"
import LinkButton from "../LinkButton"

interface introPros {
    title: string;
    description: string
}

const PageIntro:React.FC<introPros> = ({ title, description }) => {
  return (
    <div className={ styles["page__intro"] }>
        <div className="container">
            <div className={ styles["page__intro__content"] }>
               <div className={ styles["page__intro__content--text"] }>
                    <h2>{ title }</h2>
                    <p>{ description }</p>
                    <LinkButton type="primary" label="Create a free account" path="sign-up" />
               </div>
                <div className={ styles["page__intro__content__image"] }>
                    <Image src={ hand } alt="Helper thumbnail" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PageIntro