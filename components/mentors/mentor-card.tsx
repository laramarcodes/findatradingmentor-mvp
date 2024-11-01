'use client'

import { forwardRef } from 'react'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import type { Mentor } from "@/lib/types"

const MotionCard = motion(forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => (
  <div ref={ref} className="group h-full">
    {children}
  </div>
)))
MotionCard.displayName = 'MotionCard'

export const MentorCard = forwardRef<HTMLDivElement, { mentor: Mentor }>(({ mentor }, ref) => {
  return (
    <a href={`/mentor/${mentor.id}`} className="block h-full">
      <MotionCard ref={ref}>
        <Card className="overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={mentor.profileImage}
                alt={`${mentor.name}'s profile`}
                fill
                className="object-cover object-center transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">
                {mentor.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2">
                {mentor.handle}
              </p>
              
              <Badge 
                className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100 rounded-full border-0 px-2 py-0.5 text-xs font-medium mb-2"
              >
                {mentor.community}
              </Badge>

              <div className="flex flex-wrap gap-1 mb-2">
                {mentor.markets.map((market) => (
                  <Badge 
                    key={market} 
                    variant="outline"
                    className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-0.5 rounded-full"
                  >
                    {market}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600 dark:text-gray-400">
                  {mentor.experience}
                </span>
                {mentor.liveTrades && (
                  <span className="flex items-center text-green-600 dark:text-green-400">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Live Trading
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </MotionCard>
    </a>
  )
})
MentorCard.displayName = 'MentorCard'