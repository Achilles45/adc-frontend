import styles from "./features.module.scss"
import Link from "next/link"
import Image from "next/image"
import save from "../../../../public/assets/save-phone.png"
import invest from "../../../../public/assets/invest-phone.png"
import LinkButton from "../../shared/LinkButton"

const Features = () => {
  return (
    <div className={ styles["features"] }>
        <div className="container">
            <div className={ styles["features__header"] }>
                <h2>Earn competitive interest rates on savings and investments</h2>
            </div>
            <div className={ styles["features__grid"] }>
              <div className={ styles["features__grid__item__item1"] }>
                <div className={ styles["features__grid__item__item1__thumbnail"] }>
                  <Image src={ save } height={200} alt="save thumbnail" />
                </div>
                <div className={ styles["features__grid__item__item1__text"] }>
                  <div className={ styles["features__grid__item__item1__text--top"] }>
                    <h2>Monthly Savings</h2>
                    <p>Save a predefined amount of money monthly and earn 4% interest every month.</p>
                  </div>
                  <div className={ styles["features__grid__item__item1__text--bottom"] }>
                    {/* <Link href="/">Learm more today</Link> */}
                    <LinkButton type="primary" label="Learn more today" path="/savings" />
                  </div>
                </div>
              </div>

              <div className={ styles["features__grid__item__item2"] }>
                <div className={ styles["features__grid__item__item2__thumbnail"] }>
                  <Image src={ invest } height={200} alt="save thumbnail" />
                </div>
                <div className={ styles["features__grid__item__item2__text"] }>
                  <div className={ styles["features__grid__item__item2__text--top"] }>
                    <h2>Fixed Investments</h2>
                    <p>Lock a fixed amount for either 6 months or 12 months and earn a whooping 7% monthly.</p>
                  </div>
                  <div className={ styles["features__grid__item__item2__text--bottom"] }>
                  <LinkButton type="primary" label="Learn more today" path="/invest" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Features