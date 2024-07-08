"use client"

import styles from "./auth.module.scss"
import AuthOnboarding from "@/app/components/auth/AuthOnboarding"
import Link from "next/link"
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import validationSchema from "@/app/utils/validationSchema";
import { Formik, Form } from "formik"
import * as yup from "yup";

const SignIn = () => {
  const initialValues = {
    email: "",
    password: ""
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
          Don't have an account? <Link href="/auth/sign-up">Sign up</Link>
          </span>
        <h2>Hey, welcome back!</h2>
        <p>Login with your credentials to continue to your dashboard</p><br />
          <Form>
            <div  style={{ marginBottom: "1rem" }}>
              <label htmlFor="emailAddress">Email Address *</label>
              <Input 
                name='email'
                type='email'
                placeholder='example@you.com' 
                id="email" 
                label="Email Address *"               
                />
            </div>
     
              <div>
              <label htmlFor="password">Password *</label><br />
                <Input 
                    name='password'
                    type="password"
                    placeholder='Password' 
                    id="password" 
                    label="Password *"                  
                  />
              </div>
            <p className={ styles["sign-up__reset__helper"] }><Link href="/auth/forgot-password">Forget Password?</Link>
          </p>
            <Button 
              type='submit'
              label='Login'
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


export default SignIn