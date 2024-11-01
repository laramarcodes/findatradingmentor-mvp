"use client"

import { useState, useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import { MentorCard } from "./mentor-card"
import { SearchBar } from "./search-bar"
import { SortSelect } from "./sort-select"
import { mentors } from "@/lib/mentors"

export function MentorGrid() {
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
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortSelect value={sortBy} onValueChange={setSortBy} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}