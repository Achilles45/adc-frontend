"use client"

import styles from "../sign-in/auth.module.scss"
import AuthOnboarding from "@/app/components/auth/AuthOnboarding"
import Link from "next/link"
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import validationSchema from "@/app/utils/validationSchema";
import { Formik, Form } from "formik"
import * as yup from "yup";

const PasswordResetCode = () => {
  const initialValues = {
    code: "",
  }

  const { email,password } = validationSchema
  return (
    <div className={ styles["sign-up"] }>
        <AuthOnboarding />
        <div className={ styles["sign-up__content"] }>
        <Formik 
          initialValues={ initialValues }
          validationSchema={ yup.object({
            email,
            password
          }) }
          onSubmit={ (values) =>{
            console.log(values)
            // setTimeout(() => {
            //  dispatchSuccessAlert("Successful. Redirecting to your dashboard")
            // }, 5000);
          } }
        >
        { ( props ) => (
          <>
          {/* <Alert /> */}
          <div className={ styles["sign-up__content__details"] }>
          <span className={ styles["sign-up__content__details__login__link"] }>
          <Link href="/auth/sign-in">Go back to sign in</Link>
          </span>
        <h2>Recover your account</h2>
        <p>We have sent an email containing your verification code to the email you provided. Check your inbox or smam folder</p><br />
          <Form>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="code">Verification code *</label>
              <Input 
                name='code'
                type='text'
                placeholder='Enter the verification code' 
                id="code" 
                label="Verification code *"               
                />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="code">New password *</label>
              <Input 
                name='password'
                type='password'
                placeholder='Create a new password' 
                id="password" 
                label="password *"               
                />
            </div>

            <div>
              <label htmlFor="code">Confirm password *</label>
              <Input 
                name='confirm_password'
                type='password'
                placeholder='Confirm your password' 
                id="confirm_password" 
                label="confrim password *"               
                />
            </div>

            <p className={ styles["sign-up__reset__helper"] }><Link href="/auth/signin">Resend verification code</Link>
          </p>
            <Button 
              type='submit'
              label='Reset Password'
              variant='primary'
              // loading={ loading }
              />
          </Form>
        </div></>
        ) }
        </Formik>
    </div>
    </div>
  )
}


export default PasswordResetCode