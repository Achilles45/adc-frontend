"use client"

import styles from "../sign-in/auth.module.scss"
import AuthOnboarding from "@/app/components/auth/AuthOnboarding"
import Link from "next/link"
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import validationSchema from "@/app/utils/validationSchema";
import { Formik, Form } from "formik"
import * as yup from "yup";

const ForgotPassword = () => {
  const initialValues = {
    email: "",
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
        <h2>Forgot your password?</h2>
        <p>It's okay if you forgot your password. We will help you recover it. Enter the email associated with your account to continue</p><br />
          <Form>
            <div>
              <label htmlFor="emailAddress">Email Address *</label>
              <Input 
                name='email'
                type='email'
                placeholder='example@you.com' 
                id="email" 
                label="Email Address *"               
                />
            </div>

            <p className={ styles["sign-up__reset__helper"] }><Link href="/auth/signin"></Link>
          </p>
            <Button 
              type='submit'
              label='Send Verification Code'
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


export default ForgotPassword