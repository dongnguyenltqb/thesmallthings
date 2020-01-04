import { motion } from "framer-motion"

import { pageTranstion } from "../constants"

export default function Page(props) {
  return (
    <motion.div
      {...props}
      variants={pageTranstion}
      initial="incoming"
      animate="enter"
      className="p-4 tablet:p-6"
    />
  )
}
