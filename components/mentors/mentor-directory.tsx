'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import { MentorCard } from "./mentor-card"
import { SearchBar } from "./search-bar"
import { SortSelect } from "./sort-select"
import { FilterSidebar } from "./filter-sidebar"
import { mentors } from "@/lib/mentors"

export function MentorDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [rangeFilters, setRangeFilters] = useState<Record<string, number[]>>({})
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

    if (selectedFilters.length > 0) {
      results = results.filter(mentor =>
        selectedFilters.every(filter =>
          mentor.markets.includes(filter) ||
          mentor.tradingStyle.includes(filter)
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
  }, [searchTerm, sortBy, selectedFilters, rangeFilters])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <FilterSidebar
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          rangeFilters={rangeFilters}
          setRangeFilters={setRangeFilters}
        />
        
        <div className="flex-1">
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
              <SortSelect value={sortBy} onValueChange={setSortBy} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
    </div>
  )
}