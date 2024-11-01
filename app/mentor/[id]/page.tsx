import { notFound } from 'next/navigation'
import { mentors } from '@/lib/mentors'
import { MentorProfile } from '@/components/mentor-profile/mentor-profile'

export function generateStaticParams() {
  return mentors.map((mentor) => ({
    id: mentor.id,
  }))
}

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  const mentor = mentors.find(m => m.id === params.id)

  if (!mentor) {
    notFound()
  }

  return <MentorProfile mentor={mentor} />
}