import styles from "./plan-card.module.scss"
import LinkButton from "../../shared/LinkButton";
import Image from "next/image";
import pattern from "../../../../public/assets/pattern.png"

interface planProps {
  duration: string;
  minAmount: string;
  roi: number
}

const PlanCard:React.FC<planProps> = ({ duration, minAmount, roi }) => {
  return (
    <div className={ styles["plan"] }>
      <div className={ styles["plan__thumbnail"] }>
        <Image src={ pattern } height={100} width={100} alt="thumbnail" />
      </div>
     <div className={ styles["plan__body"] }>
      <h1>{ duration } investment plan</h1>
        {/* <p>With a minimum of ${ minAmount } per unit you can join this plan and enjoy { roi }% returns on your investment. Getting started is very easy too. Note that this requires a one time payment and you can have as many units as possible.</p> */}
        <div className={ styles["plan__body__details"] }>
          <p><span>Minimum Amount:</span> <span>&#8358;{ minAmount }</span></p>
          <p><span>Returns on Investment:</span> <span>{ roi }%</span></p>
          <p><span>Minimum numbers of units:</span> <span>1</span></p>
          <p><span>Maximum numbers of units:</span> <span>Unlimited</span></p>
        </div>
        <div className={ styles["plan__body__note"] }>
            <p><strong>Note</strong> hat this requires a one time payment and you can have as many units as possible. Getting started is very easy and completely parperless.</p>
        </div>
        <LinkButton type="primary" label="Continue with this plan" path="/sign-up" /><br />
     </div>
    </div>
  )
}

export default PlanCard