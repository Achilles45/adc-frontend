"use client"

import styles from "../sign-in/auth.module.scss"
import AuthOnboarding from "@/app/components/auth/AuthOnboarding"
import Link from "next/link"
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import validationSchema from "@/app/utils/validationSchema";
import { Formik, Form } from "formik"
import * as yup from "yup";

const Signup = () => {
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
          Already have an account? <Link href="/auth/sign-in">Sign in</Link>
          </span>
        <h2>Hey, welcome back!</h2>
        <p>Login with your credentials to continue to your dashboard</p><br />
          <Form>
            <div className={ styles["sign-up__content__row"] }>
                <div>
                    <label htmlFor="firstname">First Name *</label>
                    <Input 
                        name='firstname'
                        type='text'
                        placeholder='Enter your firstname' 
                        id="firstname" 
                        label="firstname *"               
                        />
                </div>
                <div>
                    <label htmlFor="lastname">Surname *</label>
                    <Input 
                        name='lastname'
                        type='text'
                        placeholder='Enter your surname' 
                        id="lastname" 
                        label="lastname *"               
                        />
                </div>
            </div>

            <div className={ styles["sign-up__content__row"] }>
                <div>
                    <label htmlFor="emailAddress">Email *</label>
                    <Input 
                        name='email'
                        type='text'
                        placeholder='Enter your email address' 
                        id="email" 
                        label="email *"               
                        />
                </div>
                <div>
                    <label htmlFor="phone">Phone *</label>
                    <Input 
                        name='phone'
                        type='tel'
                        placeholder='Enter your phone number' 
                        id="phone" 
                        label="phone *"               
                        />
                </div>
            </div>

            <div className={ styles["sign-up__content__row"] }>
                <div>
                    <label htmlFor="password">Password *</label>
                    <Input 
                        name='password'
                        type='password'
                        placeholder='Enter your password' 
                        id="password" 
                        label="password *"               
                        />
                </div>
                <div>
                    <label htmlFor="confirm_password">Confirm password *</label>
                    <Input 
                        name='confirm_password'
                        type='password'
                        placeholder='Confirm password' 
                        id="confirm_password" 
                        label="confirm_password *"               
                        />
                </div>
            </div>

            <p className={ styles["sign-up__confirm"] }>By clicking submit you agree to our terms and conditions.
          </p>
            <Button 
              type='submit'
              label='Create Account'
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


export default Signup