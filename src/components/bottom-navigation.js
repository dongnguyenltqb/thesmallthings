import classnames from "classnames"

import ActiveLink from "./active-link"

export default function BottomNavigation({ menus, ...props }) {
  return (
    <nav
      {...props}
      className={classnames(
        "fixed bottom-0 left-0 w-full h-16 bg-white border-t border-solitude-214 select-none",
        props.className,
      )}
    >
      <ul className="flex justify-between w-full max-w-sm px-2 mx-auto">
        {menus.map(item => {
          return (
            <ActiveLink key={item.path} href={item.path}>
              {active => (
                <li
                  className={classnames(
                    "flex flex-col items-center justify-center w-16 h-16 relative",
                    {
                      "text-cinder": !active,
                      "text-ocean": active,
                    },
                  )}
                >
                  <svg
                    width="20"
                    height="20"
                    className="fill-current"
                    strokeWidth="1.5"
                  >
                    <use xlinkHref={`/assets/icons.svg#${item.icon}`} />
                  </svg>
                  <h5 className="mt-1 text-xs font-medium tracking-wide">
                    {item.title}
                  </h5>
                </li>
              )}
            </ActiveLink>
          )
        })}
      </ul>
    </nav>
  )
}
