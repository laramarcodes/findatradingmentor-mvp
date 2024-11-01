"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const mentors = [
  {
    name: "AM Trades",
    handle: "@amtrades",
    program: "The Market Lens",
    experience: "5+ years",
    markets: ["Futures", "Indices"],
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=400&fit=crop",
    isLive: true
  },
  {
    name: "TTrades",
    handle: "@ttrades_edu",
    program: "The Market Lens",
    experience: "7+ years",
    markets: ["Futures", "Indices"],
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    isLive: true
  },
  {
    name: "TJR",
    handle: "@tjr_trades",
    program: "TJR Trading",
    experience: "5+ years",
    markets: ["Futures", "Indices"],
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    isLive: true
  },
  {
    name: "Patrick Wieland",
    handle: "@patrick_wieland",
    program: "Wieland Trading",
    experience: "6+ years",
    markets: ["Futures", "Forex"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    isLive: true
  },
  {
    name: "Tori",
    handle: "@toricrypto",
    program: "Tori's Trading Room",
    experience: "4+ years",
    markets: ["Crypto"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    isLive: true
  },
  {
    name: "Tanja",
    handle: "@tanjatrading",
    program: "Trading with Tanja",
    experience: "6+ years",
    markets: ["Forex", "Indices"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    isLive: true
  }
]

export function MentorGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mentors.map((mentor) => (
        <Link href={`/mentor/${mentor.handle}`} key={mentor.handle}>
          <Card className="hover:border-primary/50 transition-colors">
            <CardHeader className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover rounded-full"
                  />
                  {mentor.isLive && (
                    <div className="absolute -bottom-1 -right-1">
                      <Badge variant="secondary" className="flex items-center gap-1 bg-background border-primary/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        Live
                      </Badge>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground">{mentor.handle}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-sm font-medium text-primary mb-2">{mentor.program}</div>
              <div className="flex flex-wrap gap-2">
                {mentor.markets.map((market) => (
                  <Badge variant="secondary" key={market}>{market}</Badge>
                ))}
                <Badge variant="outline">{mentor.experience}</Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}