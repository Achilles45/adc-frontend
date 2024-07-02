import styles from "./why-card.module.scss"
import Image from "next/image";
import room from "../../../../public/assets/room.webp"
import Link from "next/link";
import LinkButton from "../../shared/LinkButton";

interface cardProps{
    title: string;
    description: string
}

const WhyCard:React.FC<cardProps> = ({ title, description }) => {
  return (
    <div className={ styles["why__card"] }>
        <div className={ styles["why__card__header"] }>
            <Image src={ room } alt="room thumbnail" />
        </div>
        <div className={ styles["why__card__body"] }>
            <h2>{ title }</h2>
            <p>{ description }</p>
            <LinkButton type="primary" label="Get started today" path="/sign-up" />
        </div>
    </div>
  )
}

export default WhyCard