import React from 'react'
import styles from "./get-started.module.scss"

const Onboarding = () => {
  return (
    <div className={ styles["start"] }>
        <div className="container">
            <div className={ styles["start__content"] }>
                <div className="row">
                    <div className="col-md-10">
                        <div className={ styles["start__content__header"] }>
                            <h1>Seamless Onboarding</h1>
                            <p>No filling of long forms, no submittion of plenty documents. You can create a free account, verify your account, fund your account and you are good to go.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className={ styles["start__content__grid"] }>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   1
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Create a free account</h6>
                            <p>Get started by creating and verifying your account. It's simple, fast and seamless and it can be completed in 2 minutes</p>
                        </div>

                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   2
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Save or invest</h6>
                            <p>Create your preferred savings plan or choose an invesmtment porfolio to get you up and running in no time.</p>
                        </div>
                        <div className={ styles["start__content__grid__item"] }> 
                            <div className={ styles["start__content__grid__item__iconholder"] }>
                                <span className={ styles["start__content__grid__item__iconholder__icon"] }>
                                   3
                                </span>
                                <div className={ styles["start__content__grid__item__iconholder--span"] }></div>
                            </div>
                            <h6>Withdraw your earnings</h6>
                            <p>On matuirity, you withdraw your capital plus interest directly to your bank account provided seamlessly.</p>
                        </div>
                    </div><br />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Onboarding