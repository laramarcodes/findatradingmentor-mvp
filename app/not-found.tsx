import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-muted-foreground mb-6">Could not find the requested mentor.</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  )
}