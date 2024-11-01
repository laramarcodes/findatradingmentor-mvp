'use client'

import { Badge } from "@/components/ui/badge"

export function TagBadge({ label }: { label: string }) {
  return (
    <Badge 
      variant="outline" 
      className="text-xs py-1 px-3 bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors border-purple-200 rounded-full"
    >
      {label}
    </Badge>
  )
}