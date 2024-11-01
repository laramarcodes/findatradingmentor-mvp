'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube } from 'lucide-react'

interface SocialLinksProps {
  handle: string
}

export function SocialLinks({ handle }: SocialLinksProps) {
  const handleWithoutAt = handle.replace('@', '')
  
  return (
    <div className="flex justify-center md:justify-start gap-4 mt-4">
      <motion.a
        href={`https://www.instagram.com/${handleWithoutAt}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Instagram className="h-6 w-6"/>
      </motion.a>
      <motion.a
        href={`https://x.com/${handleWithoutAt}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </motion.a>
      <motion.a
        href={`https://youtube.com/@${handleWithoutAt}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-blue-600 transition-colors"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Youtube className="h-6 w-6"/>
      </motion.a>
    </div>
  )
}