'use client'

import { motion } from "framer-motion"
import { LineChart, TrendingUp, Users, Award } from "lucide-react"

const stats = [
  {
    icon: LineChart,
    value: "$2.5M+",
    label: "Monthly Trading Volume",
    description: "Combined trading volume across all mentors"
  },
  {
    icon: TrendingUp,
    value: "92%",
    label: "Success Rate",
    description: "Average win rate of our top mentors"
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Active Members",
    description: "Traders learning and growing together"
  },
  {
    icon: Award,
    value: "500+",
    label: "Verified Mentors",
    description: "Professional traders with proven track records"
  }
]

export function TradingStats() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}