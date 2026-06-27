import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition ({ children }: PageTransitionProps) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 16
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -16
      }}
      transition={{
        duration: 0.28,
        ease: [0.2, 0.8, 0.2, 1]
      }}
    >
      {children}
    </motion.main>
  )
}
