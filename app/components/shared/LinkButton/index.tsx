import styles from "./link-button.module.scss"
import Link from "next/link"

interface buttonProps {
        type: string;
        label: string;
        path: string;
}

const LinkButton:React.FC<buttonProps> = ({
    type,
    label,
    path
}) => {
  return (
    <Link href={ `/${ path }` } className={ type === "primary" ? styles["link__button__primary"] : type === "dark" ? styles["link__button__dark"] :styles["link__button"]   }>{ label }</Link>
  )
}

export default LinkButton