export const pageTranstion = {
  incoming: {
    y: 3,
    transition: { ease: [0.4, 0.0, 1, 1], duration: 0.25 },
  },
  enter: {
    y: 0,
    transition: { ease: [0.0, 0.0, 0.2, 1], duration: 0.3 },
  },
}

export const menus = [
  {
    title: "Home",
    path: "/",
    icon: "home",
  },
  {
    title: "About",
    path: "/about",
    icon: "user",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "file-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: "box",
  },
]
