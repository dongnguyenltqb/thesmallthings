import classnames from "classnames"

import SidebarMenu from "./sidebar-menu"

export default function Sidebar({ menus = [], ...props }) {
  return (
    <nav
      {...props}
      className={classnames(
        "fixed top-0 left-0 w-64 h-full z-50 flex flex-col border-r border-mid-gray bg-light-gray",
        props.className,
      )}
    >
      <div className="flex items-center h-24 px-6 border-b border-mid-gray">
        <img
          className="w-12 h-12 rounded-full"
          src="/assets/images/me.jpg"
          alt="Avatar"
        />
        <div className="flex flex-col ml-2">
          <h2 className="font-semibold tracking-wide">Nguyễn Xuân Hải</h2>
          <p className="text-sm">Saigon, Vietnam</p>
        </div>
      </div>

      <div className="flex-1">
        <section className="mt-6">
          <SidebarMenu menus={menus} />
        </section>
      </div>
    </nav>
  )
}
