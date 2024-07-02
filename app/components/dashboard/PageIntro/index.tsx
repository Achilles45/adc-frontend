import styles from "./page-intro.module.scss"

interface introProps {
    title: string;
    description: string;
}

const PageIntro:React.FC<introProps> = ({ title, description }) => {
  return (
    <div className={ styles["page_intro"] }>
      <h2>{ title }</h2>
      <p>{ description }</p>
    </div>
  )
}

export default PageIntro