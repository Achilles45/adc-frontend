import styles from "./todos.module.scss"
import Todo from "../Todo"

const Todos = () => {
  return (
    <div className={ styles["todos"] }>
       <div className={ styles["todos__header"] }>
            <h3>Quick Help</h3>
            <p>Set up seamlessly and get going</p>
       </div>
        <div className={ styles["todos__todos"] }>
        <Todo 
            path="" 
            label="Add savings"
         />

        <Todo 
            path="" 
            label="Investment plans"
         />

         <Todo 
            path="" 
            label="KYC verification"
         />

        <Todo 
            path="" 
            label="Transaction pin"
         />

        <Todo 
            path="" 
            label="Payment settings"
         />

        <Todo 
            path="" 
            label="Change password"
         />

        <Todo 
            path="" 
            label="Withdraw funds"
         />

        <Todo 
            path="" 
            label="Add savings plan"
         />

        <Todo 
            path="" 
            label="Customer care"
         />
        </div>
    </div>
  )
}

export default Todos