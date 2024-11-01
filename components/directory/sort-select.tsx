"use client"

import { SlidersHorizontal } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SortSelectProps {
  value: string
  onValueChange: (value: string) => void
}

export function SortSelect({ value, onValueChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onValueChange}>
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
  )
}