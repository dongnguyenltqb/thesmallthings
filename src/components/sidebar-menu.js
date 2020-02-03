import classnames from "classnames"

import ActiveLink from "./active-link"

export default function Menu({ menus }) {
  return (
    <div className="text-sm select-none">
      {menus.map(item => (
        <ActiveLink href={item.path} key={item.path}>
          {active => (
            <div
              className={classnames(
                "flex items-center h-10 px-6 tracking-wide",
                {
                  "text-black hover:bg-mid-gray": !active,
                  "bg-primary hover:bg-primary text-white": active,
                },
              )}
            >
              <svg
                width="20"
                height="20"
                strokeWidth="1.5"
                className="mr-4 fill-current"
              >
                <use xlinkHref={`/assets/icons.svg#${item.icon}`} />
              </svg>
              <p className="font-medium tracking-wide">{item.title}</p>
            </div>
          )}
        </ActiveLink>
      ))}
    </div>
  )
}
