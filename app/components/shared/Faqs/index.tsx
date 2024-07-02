import styles from "./faqs.module.scss"
import SingleFaq from "../Faq"
const Faqs = () => {

    const faqs = [
        {
            id: 1,
            question: "What is ADC Multipurpose Cooperative",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum et mollitia inventore aliquam autem incidunt id, officia assumenda eos. Repellat animi expedita nihil molestiae quasi sunt, maiores, et temporibus quaerat nobis soluta eaque! Doloribus, labore!"
        },
        {
            id: 2,
            question: "Can I create an account for free ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 3,
            question: "Is there a monthly subscription charge ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        },
        {
            id: 4,
            question: "Can I pay for services directly on the platform ?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sapiente esse quis quam ratione natus?"
        }
    ]

  return (
    <div className={ styles["faqs"] }>
        <div className="container">
            <div className="row">
                <div className={ styles['faqs__header'] }>
                    <h1>Frequently Asked Questions</h1>
                </div>
            </div>
            <div className="row">
                <div className={ styles['faqs__details'] }>
                { faqs ? faqs.map((faq) => (
                    <SingleFaq faq={ faq } key={ faq.id }  />
                )) : <p>No questions at the moment</p> }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs