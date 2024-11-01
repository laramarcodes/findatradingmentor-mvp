'use client'

interface FeatureCardProps {
  icon: React.ElementType
  title: string
  description: string
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex gap-4 items-start p-4 rounded-lg hover:bg-white/5 transition-colors">
      <div className="bg-white/10 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="font-semibold text-white text-lg mb-1">{title}</h3>
        <p className="text-purple-200 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}