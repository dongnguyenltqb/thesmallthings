import { motion } from "framer-motion"

import { pageTranstion } from "../constants"

export default function Page(props) {
  return (
    <motion.div
      variants={pageTranstion}
      {...props}
      initial="incoming"
      animate="enter"
      className="p-4 tablet:p-6"
    />
  )
}
