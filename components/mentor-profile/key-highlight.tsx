'use client'

import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from 'lucide-react'

interface KeyHighlightProps {
  icon: LucideIcon
  title: string
  description: string
}

export function KeyHighlight({ icon: Icon, title, description }: KeyHighlightProps) {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 flex items-start space-x-4">
        <div className="bg-purple-100 p-2 rounded-full">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}