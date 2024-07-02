import styles from "./todo.module.scss"
import Link from "next/link";

interface todoProps {
    path: string;
    label: string;
    icon?: any
}

const Todo:React.FC<todoProps> = ({
    path,
    label,
    icon
}) => {
  return (
    <Link href={ `/dashboard/${ path }` } className={ styles["todo"] }>
        { icon }{ label }
    </Link>
  )
}

export default Todo