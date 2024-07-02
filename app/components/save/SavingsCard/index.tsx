import styles from "./savings-card.module.scss"
import LinkButton from "../../shared/LinkButton";
import Image from "next/image";
import pattern from "../../../../public/assets/pattern.png"

interface planProps {
  duration: string;
  minAmount: string;
  roi: number
}

const SavingsCard:React.FC<planProps> = ({ duration, minAmount, roi }) => {
  return (
    <div className={ styles["save__card"] }>
      <div className={ styles["save__card__thumbnail"] }>
        <Image src={ pattern } height={100} width={100} alt="thumbnail" />
      </div>
     <div className={ styles["save__card__body"] }>
      <h1>{ duration } savings plan</h1>
        {/* <p>With a minimum of ${ minAmount } per unit you can join this plan and enjoy { roi }% returns on your investment. Getting started is very easy too. Note that this requires a one time payment and you can have as many units as possible.</p> */}
        <div className={ styles["save__card__body__details"] }>
          <p><span>Minimum Amount:</span> <span>&#8358;{ minAmount }</span></p>
          <p><span>Returns on savings:</span> <span>{ roi }%</span></p>
          <p><span>Minimum numbers of saving plans:</span> <span>1</span></p>
          <p><span>Maximum numbers of savings plans:</span> <span>Unlimited</span></p>
        </div>
        <div className={ styles["save__card__body__note"] }>
            <p><strong>Note</strong> that savings are fixed predefined amounts that must be saved monthly. You loose the interest on any month you fail to save.</p>
        </div>
        <LinkButton type="primary" label="Create a savings plan" path="/sign-in" /><br />
     </div>
    </div>
  )
}

export default SavingsCard