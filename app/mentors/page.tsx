'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Search, SlidersHorizontal, Star } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"

interface Mentor {
  id: string
  name: string
  handle: string
  profileImage: string
  community: string
  communityLink: string
  markets: string[]
  experience: string
  liveTrades: boolean
  bestKnownFor: string
  tradingStyle: string[]
  verified: boolean
}

const mentors: Mentor[] = [
  {
    id: "1",
    name: "AM Trades",
    handle: "@amtrades",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMTrades_profile-xVYIKkoc3Yyt0lErLM7sLu8UrnhLAp.jpeg",
    community: "The Market Lens",
    communityLink: "https://tradethelens.com/",
    markets: ["Futures", "Indices"],
    experience: "5+ years",
    liveTrades: true,
    bestKnownFor: "Weekly Profiles & Minimalist Charts",
    tradingStyle: ["Day Trading"],
    verified: true,
  },
  {
    id: "2",
    name: "TTrades",
    handle: "@ttrades_edu",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ttrades-Pqj3TvHpnh3lXxn59AT4zpf8dj5yv4.png",
    community: "The Market Lens",
    communityLink: "https://themarketlens.com",
    markets: ["Futures", "Indices"],
    experience: "7+ years",
    liveTrades: true,
    bestKnownFor: "Market Analysis",
    tradingStyle: ["Technical Analysis"],
    verified: true,
  },
  {
    id: "3",
    name: "TJR",
    handle: "@tjr_trades",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tjr-3Z1dboGJHJkVeOK5VAtCXpr1UP8Dhv.png",
    community: "TJR Trading",
    communityLink: "https://tjrtrading.com",
    markets: ["Futures", "Indices"],
    experience: "5+ years",
    liveTrades: true,
    bestKnownFor: "Price Action Trading",
    tradingStyle: ["Day Trading", "Scalping"],
    verified: true
  },
  {
    id: "4",
    name: "Patrick Wieland",
    handle: "@patrick_wieland",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wieland_patrick-nhSsYHkd0AIDlZaqyUHeqEvvfDC7IJ.png",
    community: "Wieland Trading",
    communityLink: "https://wielandtrading.com",
    markets: ["Futures", "Forex"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Livestreaming on Youtube, trolling ICT",
    tradingStyle: ["Day Trading", "Technical Analysis"],
    verified: true
  },
  {
    id: "5",
    name: "Tori",
    handle: "@toricrypto",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tori-btViiF56zUn8AJyGoygCK3lBBUQk2R.png",
    community: "Tori's Trading Room",
    communityLink: "https://toristradingroom.com",
    markets: ["Crypto"],
    experience: "4+ years",
    liveTrades: true,
    bestKnownFor: "Crypto Analysis",
    tradingStyle: ["Swing Trading"],
    verified: true
  },
  {
    id: "6",
    name: "Tanja",
    handle: "@tanjatrading",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tanja-pJi7sNJbr0sNtTyH8XqxlbSS5rgQeS.png",
    community: "Trading with Tanja",
    communityLink: "https://tradingwithtanja.com",
    markets: ["Forex", "Indices"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Price Action Trading",
    tradingStyle: ["Day Trading"],
    verified: true
  },
  {
    id: "7",
    name: "Kane",
    handle: "@kane_trades",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kane_mentor-YbLW2ybzl6XjPThJ3i0w67hTnkqgXu.png",
    community: "The Lab",
    communityLink: "https://kanestradingacademy.com",
    markets: ["Crypto", "Futures"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Market Analysis",
    tradingStyle: ["Day Trading"],
    verified: true
  },
  {
    id: "8",
    name: "Justin",
    handle: "@justintrading",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/justin-qM4X7Y0m6qLjEHF6TDE3dv61jWtReP.png",
    community: "Tactical Traders",
    communityLink: "https://justintradingcommunity.com",
    markets: ["Futures", "Forex"],
    experience: "5+ years",
    liveTrades: true,
    bestKnownFor: "Technical Analysis",
    tradingStyle: ["Day Trading"],
    verified: true
  },
  {
    id: "9",
    name: "Lance Breitstein",
    handle: "@lancebreitstein",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lance-breitstein-GbTeXoSK8kyqnTs4Yx42NfIlr9NKW6.png",
    community: "Breitstein Trading",
    communityLink: "https://breitsteintrading.com",
    markets: ["Futures", "Forex"],
    experience: "8+ years",
    liveTrades: true,
    bestKnownFor: "Price Action & Market Structure",
    tradingStyle: ["Technical Analysis", "Price Action"],
    verified: true
  },
  {
    id: "10",
    name: "Jay Pelle",
    handle: "@jaypelle",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jaypelle-a9LuDGSIKUCwnApx8kNgCzq0aUBswH.png",
    community: "Pelle Trading",
    communityLink: "https://pelletrading.com",
    markets: ["Stocks", "Options"],
    experience: "7+ years",
    liveTrades: true,
    bestKnownFor: "Options Strategies",
    tradingStyle: ["Swing Trading", "Options Flow"],
    verified: true
  },
  {
    id: "11",
    name: "Humbled Trader",
    handle: "@humbledtrader",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/humbledtrader-HLuqTUxaUQNuCnKMgDVyHuHuRGwrXA.png",
    community: "Humbled Trading",
    communityLink: "https://humbledtrading.com",
    markets: ["Stocks", "Options"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Day Trading Education",
    tradingStyle: ["Day Trading", "Swing Trading"],
    verified: true
  },
  {
    id: "12",
    name: "Casper",
    handle: "@caspertrading",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casper-F4RrSEzD6946WV9Nl8CdjTOrpj9K59.png",
    community: "Casper's Trading Hub",
    communityLink: "https://caspertradinghub.com",
    markets: ["Stocks", "Options"],
    experience: "5+ years",
    liveTrades: true,
    bestKnownFor: "Risk Management",
    tradingStyle: ["Technical Analysis", "Risk Management"],
    verified: true
  },
  {
    id: "13",
    name: "Brian Stonk",
    handle: "@brianstonk",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brianstonk_profile-CHplLUR5VwxjFauYk32eBSD9xoeKcw.png",
    community: "Stonk Trading",
    communityLink: "https://stonktrading.com",
    markets: ["Crypto", "Stocks"],
    experience: "4+ years",
    liveTrades: true,
    bestKnownFor: "Technical Analysis",
    tradingStyle: ["Swing Trading", "Day Trading"],
    verified: true
  },
  {
    id: "14",
    name: "Trades By Matt",
    handle: "@TradesByMatt",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TradesByMatt-Mah5MCYF7mYFsJdUsVqhVVodlprDX2.png",
    community: "Beats The Market",
    communityLink: "https://beatsthemarket.com",
    markets: ["Futures", "Indices"],
    experience: "5+ years",
    liveTrades: true,
    bestKnownFor: "Market Structure",
    tradingStyle: ["Day Trading", "Scalping"],
    verified: true
  },
  {
    id: "15",
    name: "Lethality",
    handle: "@lethality_trading",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lethality-VVNElXpl4PMKctS24nbAzHIWSZ8ry3.jpg",
    community: "Lethality Trading",
    communityLink: "https://lethalitytrading.com",
    markets: ["Forex", "Indices"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Technical Analysis",
    tradingStyle: ["Scalping", "Day Trading"],
    verified: true
  },
  {
    id: "16",
    name: "Amas",
    handle: "@amas_trading",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amas-RdPNnGOdMUBzTok7dAEpeDVjESfLjM.png",
    community: "Amas Trading",
    communityLink: "https://amastrading.com",
    markets: ["Crypto", "Stocks"],
    experience: "4+ years",
    liveTrades: true,
    bestKnownFor: "Crypto Analysis",
    tradingStyle: ["Swing Trading", "Day Trading"],
    verified: true
  },
  {
    id: "18",
    name: "Dante",
    handle: "@dante_trades",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dante-9t8zWwH89WxCC1yknE3TxHGQpUTnjZ.png",
    community: "Dante's Trading Room",
    communityLink: "https://dantestradingroom.com",
    markets: ["Stocks", "Options"],
    experience: "6+ years",
    liveTrades: true,
    bestKnownFor: "Options Strategies",
    tradingStyle: ["Day Trading", "Options Flow"],
    verified: true
  },
  {
    id: "19",
    name: "The Engineer",
    handle: "@ICT_Concepts",
    profileImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ict-yBDsaadzOlXRyhK5VciX2xG3utCA6C.jpg",
    community: "ICT Concepts",
    communityLink: "https://ictconcepts.com",
    markets: ["Forex", "Indices", "Commodities"],
    experience: "10+ years",
    liveTrades: true,
    bestKnownFor: "ICT Concepts",
    tradingStyle: ["Technical Analysis", "Market Structure"],
    verified: true
  }
]

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <Link href={`/mentor/${mentor.id}`} passHref>
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
      >
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
              className="bg-purple-100 text-purple-700 rounded-full border-0 px-2 py-0.5 text-xs font-medium mb-2"
            >
              {mentor.community}
            </Badge>

            <div className="flex flex-wrap gap-1 mb-2">
              {mentor.markets.map((market) => (
                <Badge 
                  key={market} 
                  variant="outline"
                  className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full"
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
      </motion.div>
    </Link>
  )
}

export default function MentorDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filteredMentors, setFilteredMentors] = useState(mentors)

  useEffect(() => {
    let results = mentors
    
    if (searchTerm) {
      results = results.filter(mentor => 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.community.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.markets.some(market => 
          market.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        mentor.tradingStyle.some(style =>
          style.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    results = [...results].sort((a, b) => {
      switch (sortBy) {
        case "new":
          return parseInt(b.id) - parseInt(a.id)
        case "trending":
          return b.liveTrades === a.liveTrades ? 0 : b.liveTrades ? -1 : 1
        case "featured":
          return b.verified === a.verified ? 0 : b.verified ? -1 : 1
        default:
          return 0
      }
    })

    setFilteredMentors(results)
  }, [searchTerm, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search mentors, markets, or trading styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Newest</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="featured">Featured</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredMentors.map((mentor) => (
              <MentorCard 
                key={mentor.id} 
                mentor={mentor}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}