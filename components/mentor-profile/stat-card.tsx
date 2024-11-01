'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  icon: React.ElementType
  title: string
  value: React.ReactNode
  subtitle?: string
}

export function StatCard({ icon: Icon, title, value, subtitle }: StatCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="group hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4 flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="font-medium text-base text-gray-600">{title}</h2>
            <div className="text-2xl font-semibold mt-1 text-gray-900">{value}</div>
            {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}