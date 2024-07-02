import styles from "./analytics-card.module.scss"
import Link from "next/link";
import Image from "next/image";
import savings from "../../../../public/assets/savings.png"
import moneyBag from "../../../../public/assets/money-bag.png"
import growth from "../../../../public/assets/growth.png"

interface cardProps {
    title: string;
    value: number;
    type: "save" | "invest" | "balance"
}

const AnalyticsCard:React.FC<cardProps> = ({
    title,
    value,
    type
}) => {
  return (
    <div className={ type === "save" ? styles["analytics__card--save"] : type === "invest" ? styles["analytics__card--invest"] : styles["analytics__card"] }>
        <div className={ styles["analytics__card__thumbnail"] }>
            <Image src={ type === "balance" ? moneyBag : type === "invest" ? growth : savings } alt="" height={ 75 } width={ 75 } />
        </div>
        <div className={ styles["analytics__card__top"] }>
            <h4>{ title }</h4>
        </div>
        <div className={ styles["analytics__card__bottom"] }>
            <h3>&#8358;{ value.toLocaleString("en-US") }</h3>
            { type === "save" || type === "invest" ?
            <div>
               <Link href="">{ type === "save" ? "Add Savings" : "Buy Investment" }</Link> 
            </div>
            : <Link href="">Withdraw Funds</Link> }
        </div>
    </div>
  )
}

export default AnalyticsCard