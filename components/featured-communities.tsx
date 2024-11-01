'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const communities = [
  {
    name: "The Market Lens",
    description: "Advanced technical analysis and market profiling community",
    members: "15K+",
    monthlyFee: "$99",
    features: ["Live Trading Sessions", "Daily Market Analysis", "Private Discord"],
    tags: ["Futures", "Indices"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
  },
  {
    name: "Elite Traders Club",
    description: "Focus on institutional order flow and volume profile trading",
    members: "10K+",
    monthlyFee: "$149",
    features: ["Order Flow Analysis", "Mentorship Program", "Trading Algorithms"],
    tags: ["Forex", "Commodities"],
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
  },
  {
    name: "Crypto Alpha",
    description: "Leading cryptocurrency trading and investment community",
    members: "20K+",
    monthlyFee: "$129",
    features: ["Token Analysis", "DeFi Strategies", "NFT Alpha"],
    tags: ["Crypto", "DeFi"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80"
  }
]

export function FeaturedCommunities() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {communities.map((community, index) => (
        <motion.div
          key={community.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{community.name}</h3>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {community.members}
                </Badge>
              </div>
              <p className="text-muted-foreground mb-4">{community.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {community.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </div>
              <div className="space-y-2 mb-6">
                {community.features.map(feature => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    {feature}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">{community.monthlyFee}/mo</span>
                <Button className="gap-2">
                  Join Community
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}