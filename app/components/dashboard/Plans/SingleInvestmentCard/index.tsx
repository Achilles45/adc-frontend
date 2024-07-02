import styles from "./single-invest-card.module.scss"
import LinkButton from "../../../shared/LinkButton";
import Image from "next/image";
import pattern from "../../../../../public/assets/pattern.png"
import Link from "next/link";

interface planProps {
  duration: string;
  minAmount: string;
  roi: number
}

const SingleInvestmentCard:React.FC<planProps> = ({ duration, minAmount, roi }) => {
  return (
    <div className={ styles["single__plan"] }>
      <div className={ styles["single__plan__thumbnail"] }>
        <Image src={ pattern } height={40} width={40} alt="thumbnail" />
      </div>
     <div className={ styles["single__plan__body"] }>
      <h1>{ duration } investment plan</h1>
        <div className={ styles["single__plan__body__details"] }>
          <p><span>Minimum Amount:</span> <span>&#8358;{ minAmount }</span></p>
          <p><span>Returns on Investment:</span> <span>{ roi }%</span></p>
          <p><span>Minimum Units:</span> <span>1</span></p>
          <p><span>Maximum Units:</span> <span>Unlimited</span></p>
        </div>
        <Link href="">Buy Investment</Link>
        {/* <div className={ styles["single__plan__body__note"] }>
            <p><strong>Note</strong> hat this requires a one time payment and you can have as many units as possible. Getting started is very easy and completely parperless.</p>
        </div> */}
        {/* <LinkButton type="primary" label="Continue with this single__plan" path="/sign-up" /><br /> */}
     </div>
    </div>
  )
}

export default SingleInvestmentCard