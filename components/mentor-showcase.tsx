'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StarIcon } from "lucide-react"
import { motion } from "framer-motion"
import { mentors } from "@/lib/mentors"

export function MentorShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {mentors.map((mentor, index) => (
        <motion.div
          key={mentor.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="backdrop-blur-sm bg-card/50 border-border/50 hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={mentor.profileImage} alt={mentor.name} />
                <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{mentor.name}</h3>
                <p className="text-sm text-muted-foreground">{mentor.handle}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-3">
                <StarIcon className="h-4 w-4 fill-primary text-primary" />
                <span className="font-medium">{mentor.bestKnownFor}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {mentor.markets.map((market) => (
                  <Badge key={market} variant="secondary">{market}</Badge>
                ))}
                {mentor.verified && (
                  <Badge variant="outline" className="border-primary/50 text-primary">Verified</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}