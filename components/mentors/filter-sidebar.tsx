'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, X, Search } from 'lucide-react'

const filterCategories = [
  { 
    title: "Years Trading", 
    options: ["3-5", "5-10", "10-15", "15-20", "20+"],
    icon: "⏱️",
    type: "range" as const
  },
  { 
    title: "Primary Markets", 
    options: ["Forex", "Stocks", "Crypto", "Futures", "Options", "Commodities"],
    icon: "📊",
    type: "multiple" as const
  },
  { 
    title: "Trading Style", 
    options: ["Day trading", "Swing trading", "Scalping", "Position trading", "Algorithmic trading"],
    icon: "📈",
    type: "multiple" as const
  },
  { 
    title: "Trading Tools & Concepts", 
    options: ["Technical analysis", "Fundamental analysis", "ICT/SMC", "Order flow", "Price action", "Indicators", "Algorithms"],
    icon: "🧰",
    type: "multiple" as const
  },
  { 
    title: "Trading Session Focus", 
    options: ["New York", "London", "Asia", "All sessions"],
    icon: "🌍",
    type: "multiple" as const
  },
  { 
    title: "Trading Platforms", 
    options: ["TradingView", "MetaTrader 4", "MetaTrader 5", "NinjaTrader", "ThinkOrSwim", "Custom platform"],
    icon: "💻",
    type: "multiple" as const
  },
  { 
    title: "Live Trading", 
    options: ["Youtube", "Discord", "Twitch", "Private Community"],
    icon: "🎥",
    type: "multiple" as const
  },
  { 
    title: "Educational Content", 
    options: ["Video courses", "Community membership", "PDF courses", "1-on-1 mentoring", "Live trading sessions"],
    icon: "📚",
    type: "multiple" as const
  }
]

interface FilterCategory {
  title: string
  options: string[]
  icon: string
  type: 'range' | 'multiple' | 'binary'
}

interface FilterSectionProps {
  category: FilterCategory
  selectedFilters: string[]
  rangeFilters: Record<string, number[]>
  onFilterChange: (filter: string, value?: number[] | string) => void
}

interface RangeFilters {
  [key: string]: number[]
}

interface FilterSidebarProps {
  selectedFilters: string[]
  setSelectedFilters: (filters: string[]) => void
  rangeFilters: RangeFilters
  setRangeFilters: (filters: RangeFilters) => void
}

function FilterSection({ category, selectedFilters, rangeFilters, onFilterChange }: FilterSectionProps) {
  const [rangeValue, setRangeValue] = useState<number[]>(() => 
    rangeFilters[category.title] || [0, category.options.length - 1]
  )
  const [searchTerm, setSearchTerm] = useState("")

  const handleRangeChange = useCallback((value: number[]) => {
    setRangeValue(value)
    onFilterChange(category.title, value)
  }, [category.title, onFilterChange])

  useEffect(() => {
    if (category.type === "range") {
      setRangeValue(rangeFilters[category.title] || [0, category.options.length - 1])
    }
  }, [category.type, category.title, category.options.length, rangeFilters])

  const filteredOptions = useMemo(() => 
    category.options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [category.options, searchTerm]
  )

  const selectedCount = useMemo(() => 
    category.type === "multiple" 
      ? selectedFilters.filter(filter => category.options.includes(filter)).length
      : 0,
    [category.type, category.options, selectedFilters]
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-start text-left font-normal mb-2"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <span className="mr-2 text-lg">{category.icon}</span>
              <span>{category.title}</span>
            </div>
            {selectedCount > 0 && (
              <Badge variant="secondary" className="ml-2">
                {selectedCount}
              </Badge>
            )}
            <ChevronDown className="w-4 h-4 ml-2" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          {category.type === "multiple" && (
            <>
              <div className="relative mb-2">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search options..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
              <ScrollArea className="h-72">
                {filteredOptions.map((option) => (
                  <div key={option} className="flex items-center mb-2">
                    <Checkbox
                      id={`${category.title}-${option}`}
                      checked={selectedFilters.includes(option)}
                      onCheckedChange={() => onFilterChange(option)}
                    />
                    <label 
                      htmlFor={`${category.title}-${option}`} 
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </ScrollArea>
            </>
          )}
          {category.type === "range" && (
            <div className="space-y-4">
              <Slider
                min={0}
                max={category.options.length - 1}
                step={1}
                value={rangeValue}
                onValueChange={handleRangeChange}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{category.options[rangeValue[0]]}</span>
                <span>{category.options[rangeValue[1]]}</span>
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function FilterSidebar({ selectedFilters, setSelectedFilters, rangeFilters, setRangeFilters }: FilterSidebarProps) {
  const handleFilterChange = useCallback((filter: string, value?: number[] | string) => {
    if (Array.isArray(value)) {
      setRangeFilters(prev => ({...prev, [filter]: value}))
    } else {
      setSelectedFilters(prev =>
        prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
      )
    }
  }, [setSelectedFilters, setRangeFilters])

  const clearAllFilters = useCallback(() => {
    setSelectedFilters([])
    setRangeFilters({})
  }, [setSelectedFilters, setRangeFilters])

  const removeFilter = useCallback((filter: string) => {
    if (filter in rangeFilters) {
      setRangeFilters(prev => {
        const { [filter]: _, ...rest } = prev
        return rest
      })
    } else {
      setSelectedFilters(prev => prev.filter(f => f !== filter))
    }
  }, [rangeFilters, setRangeFilters, setSelectedFilters])

  const getFilterLabel = useCallback((filter: string, value: number[]) => {
    const category = filterCategories.find(c => c.title === filter)
    if (category && Array.isArray(value)) {
      return `${filter}: ${category.options[value[0]]} - ${category.options[value[1]]}`
    }
    return filter
  }, [])

  return (
    <div className="w-80 bg-card border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        {(selectedFilters.length > 0 || Object.keys(rangeFilters).length > 0) && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-primary hover:text-primary/80"
          >
            Clear all
          </Button>
        )}
      </div>

      {(selectedFilters.length > 0 || Object.keys(rangeFilters).length > 0) && (
        <div className="mb-4 p-2 bg-muted rounded-md">
          <div className="flex flex-wrap gap-2">
            {Object.entries(rangeFilters).map(([filter, value]) => (
              <Badge key={filter} variant="secondary">
                {getFilterLabel(filter, value)}
                <button 
                  onClick={() => removeFilter(filter)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
            {selectedFilters.map(filter => (
              <Badge key={filter} variant="secondary">
                {filter}
                <button 
                  onClick={() => removeFilter(filter)}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="pr-4">
          {filterCategories.map((category) => (
            <FilterSection
              key={category.title}
              category={category}
              selectedFilters={selectedFilters}
              rangeFilters={rangeFilters}
              onFilterChange={handleFilterChange}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}