import styles from "./auth.module.scss"
import AuthOnboarding from "@/app/components/auth/AuthOnboarding"

const SignIn = () => {
  return (
    <div className={ styles["auth"] }>
        <AuthOnboarding />
    </div>
  )
}


export default SignIn