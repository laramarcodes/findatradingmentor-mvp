'use client'

import { MentorDirectory } from "@/components/mentors/mentor-directory"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <MentorDirectory />
    </div>
  )
}