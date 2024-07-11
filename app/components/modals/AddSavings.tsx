import styles from "./modal.module.scss"
import Button from "../shared/Button"

const AddSavings = () => {
  return (
    <div className={ styles["modal"] }>
        <div className={ styles["modal__container"] }>
            <div className={ styles["modal__container__span"] }>
                <span>Close</span>
            </div>
            <div className={ styles["modal__container__header"] }>
                <h2>Top Up Savings</h2>
                <p>Seamlessly top up your savings today!</p>
            </div>
            <div className={ styles["modal__container__body"] }>
                <form>
                    <div>
                        <label htmlFor="">Select savings plan *</label>
                        <select name="" id="">
                            <option value="">House Rent</option>
                            <option value="">Marriage Plan</option>
                            <option value="">Relocation</option>
                        </select>
                    </div>
                    <div>
                    <label htmlFor="">Amount *</label>
                        <input 
                            type="number"
                            placeholder="Enter amount to save"
                        />
                    </div>
                    <div>
                        <label htmlFor="">Upload payment receipt *</label>
                        <input type="file" />
                    </div>
                    <div>
                        <Button label="Top up savings" variant="primary" type="button" />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddSavings