'use client'

import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex-grow">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      <Input
        type="text"
        placeholder="Search mentors, markets, or trading styles..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9"
        // Remove any auto-complete to prevent browser extensions from adding attributes
        autoComplete="off"
        // Add specific input mode to improve mobile experience
        inputMode="text"
      />
    </div>
  )
}