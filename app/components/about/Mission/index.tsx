import styles from "./mission.module.scss"
import LinkButton from "../../shared/LinkButton"

const Mission = () => {
  return (
    <div className={ styles["mission"] }>
        <div className="container">
            <div className={ styles["mission__header"] }>
                <h3>Our Mission</h3>
                <h1>Empowering ADC members to build wealth profittable savings and investments</h1>
            </div>
            <div className={ styles["mission__details"] }>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, cum. Voluptate rem blanditiis dicta veniam laudantium impedit eos similique quos, quo iusto soluta odit reprehenderit obcaecati praesentium aut nisi qui natus, possimus sunt non doloribus omnis. Quae itaque modi aliquid alias dignissimos suscipit saepe accusamus doloremque quaerat, corporis ex perferendis.</p>

                <LinkButton type="primary" label="Become an ADC member today" path="sign-up" />
            </div>
        </div>
    </div>
  )
}

export default Mission