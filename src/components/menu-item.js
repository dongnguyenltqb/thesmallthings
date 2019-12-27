import Link from "next/link"
import classnames from "classnames"

export default function MenuItem({ title, path, isActive }) {
  return (
    <Link href={path}>
      <a>
        <li
          className={classnames("flex items-center tracking-wide h-10 px-6", {
            "text-cinder hover:bg-solitude-214": !isActive,
            "bg-ocean text-white": isActive,
          })}
        >
          {title}
        </li>
      </a>
    </Link>
  )
}
