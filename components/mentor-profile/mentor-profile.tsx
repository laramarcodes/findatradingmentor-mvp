'use client'

import { motion } from 'framer-motion'
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ExternalLink, 
  Star,
  Clock,
  LineChart,
  Users,
  Landmark,
  FileText,
  Layers,
  HelpCircle,
  Zap,
  BookOpen,
  Target,
  Rocket,
  Globe,
} from "lucide-react"
import { TagBadge } from './tag-badge'
import { StatCard } from './stat-card'
import { FeatureCard } from './feature-card'
import { SocialLinks } from './social-links'
import { KeyHighlight } from './key-highlight'
import type { Mentor } from '@/lib/types'

interface MentorProfileProps {
  mentor: Mentor
}

export function MentorProfile({ mentor }: MentorProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-gray-50">
        <div className="px-4 pt-8 md:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col gap-8">
            {/* Language Badge */}
            <div className="flex justify-end">
              <Badge variant="secondary" className="gap-2 bg-purple-100 text-purple-700">
                <Globe className="h-4 w-4" />
                Instruction Language: English
              </Badge>
            </div>

            {/* Profile Header Section */}
            <Card className="w-full overflow-hidden bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Profile Picture */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Image
                        src={mentor.profileImage}
                        alt={`${mentor.name}'s profile picture`}
                        width={240}
                        height={240}
                        className="rounded-full border-4 border-white object-cover shadow-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Profile Info */}
                  <div className="text-center md:text-left flex-grow">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{mentor.name}</h1>
                          {mentor.sponsored && (
                            <Badge variant="secondary" className="gap-1 bg-yellow-100 text-yellow-700">
                              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                              <span>Sponsored Profile</span>
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                          {mentor.markets.map(market => (
                            <TagBadge key={market} label={market} />
                          ))}
                          {mentor.tradingStyle.map(style => (
                            <TagBadge key={style} label={style} />
                          ))}
                          <TagBadge label={mentor.experience} />
                        </div>
                        <SocialLinks handle={mentor.handle} />
                      </div>
                      {/* CTA Button */}
                      <div className="mt-6 md:mt-0">
                        <Button className="shadow-lg hover:shadow-blue-500/20 transition-shadow bg-blue-600 hover:bg-blue-700 text-white" asChild>
                          <a href={mentor.communityLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                            Get started today
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentor Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard
                icon={Clock}
                title="Trading Experience"
                value={mentor.experience}
                subtitle="Full-time Trading"
              />
              <StatCard
                icon={LineChart}
                title="Primary Markets"
                value={mentor.markets.join(", ")}
                subtitle="Market Focus"
              />
              <StatCard
                icon={Landmark}
                title="Trading Style"
                value={mentor.tradingStyle[0]}
                subtitle="Primary Approach"
              />
              <StatCard
                icon={Users}
                title="Community"
                value={mentor.community}
                subtitle="Active Traders"
              />
            </div>

            {/* Best Known For Section */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">Best Known For</h2>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="outline" className="text-sm py-1 px-3 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors border-purple-200 rounded-full">
                    {mentor.bestKnownFor}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Bio Section */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 bg-white">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-900">About {mentor.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {mentor.name} has established themselves as a prominent trader specializing in {mentor.markets.join(" and ")} markets. 
                  Through their educational platform "{mentor.community}", they provide comprehensive trading education focused on 
                  achieving consistency through systematic analysis.
                </p>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Highlights:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: LineChart, title: "Primary Markets", description: mentor.markets.join(" and ") },
                    { icon: Landmark, title: "Trading Style", description: mentor.tradingStyle.join(", ") },
                    { icon: BookOpen, title: "Educational Platform", description: mentor.community },
                    { icon: Target, title: "Best Known For", description: mentor.bestKnownFor },
                    { icon: Users, title: "Community Features", description: "Live trading sessions, exclusive courses, market reviews" },
                    { icon: Rocket, title: "Experience", description: mentor.experience },
                  ].map((item, index) => (
                    <KeyHighlight key={index} {...item} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Section */}
            <Card className="border-0 bg-gradient-to-br from-purple-900 to-purple-800">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-white tracking-tight">
                    {mentor.community}
                  </h2>
                  <p className="text-xl text-purple-100 leading-relaxed max-w-3xl">
                    Join {mentor.name}'s trading community and learn from their experience and expertise.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FeatureCard
                    icon={FileText}
                    title="Livestreams"
                    description="Weekly livestream events on trading topics"
                  />
                  <FeatureCard
                    icon={Layers}
                    title="Analysis"
                    description="Learn in real-time through market updates"
                  />
                  <FeatureCard
                    icon={Users}
                    title="Community"
                    description="Private environment for serious traders"
                  />
                  <FeatureCard
                    icon={HelpCircle}
                    title="Support"
                    description="Get answers to your questions anytime"
                  />
                  <FeatureCard
                    icon={Zap}
                    title="Coaching"
                    description="Optional 1-on-1 mentoring sessions"
                  />
                  <FeatureCard
                    icon={FileText}
                    title="Resources"
                    description="Extensive educational library"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-6 text-lg h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href={mentor.communityLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Join Now
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  )
}