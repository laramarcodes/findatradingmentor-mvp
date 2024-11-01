'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight, TrendingUp, Users, LineChart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-bold mb-6">
              Elevate Your Trading with Elite{' '}
              <span className="text-primary">Mentorship</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect with professional traders, access real-time insights, and join exclusive communities. Transform your trading journey today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2 text-lg">
                  Get Started
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/mentors">
                <Button size="lg" variant="outline" className="text-lg">
                  Browse Mentors
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { icon: TrendingUp, label: "90%+ Win Rate", desc: "Verified track records" },
                { icon: Users, label: "50K+ Members", desc: "Active community" },
                { icon: LineChart, label: "24/7 Support", desc: "Real-time guidance" }
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20" />
            <img
              src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80"
              alt="Trading dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}