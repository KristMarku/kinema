import { Link } from "react-router-dom"

export const Button = ({title}) => {
  return (
    <div>
      <Link to="/">
        <button className="w-64 text-xl bg-gradient-to-r rounded-lg px-5 font-medium py-2.5  from-green-200 to-green-100 dark:from-blue-400 dark:to-blue-100">{title}</button>
      </Link>
    </div>
  )
}

