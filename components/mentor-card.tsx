'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Mentor } from "@/lib/types"

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <Link href={`/mentor/${mentor.id}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="h-full"
      >
        <Card className="overflow-hidden h-full bg-card hover:shadow-lg transition-all duration-300">
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={mentor.profileImage}
                alt={`${mentor.name}'s profile`}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-foreground truncate">{mentor.name}</h3>
              <p className="text-sm text-muted-foreground truncate mb-2">{mentor.handle}</p>
              
              <Badge variant="secondary" className="mb-2">
                {mentor.community}
              </Badge>

              <div className="flex flex-wrap gap-1 mb-2">
                {mentor.markets.map((market) => (
                  <Badge key={market} variant="outline">
                    {market}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">{mentor.experience}</span>
                {mentor.liveTrades && (
                  <span className="flex items-center text-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Live Trading
                  </span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}