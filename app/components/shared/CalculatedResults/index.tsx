import styles from "./results.module.scss"

interface resultProps {
    result: any
}

const CalculatedResults:React.FC<resultProps> = ({ result }) => {
  return (
    <div className={ styles["results"] }>
        <div className="container">
            <div className={ styles["results__header"] }>
                <span></span>
                <h3>You will earn</h3>
                <span></span>
            </div>
            <div className={ styles["results__header__result"] }>
                <h1>{ result }</h1>
            </div>
        </div>
    </div>
  )
}

export default CalculatedResults