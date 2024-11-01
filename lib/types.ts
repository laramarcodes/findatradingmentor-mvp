export interface Mentor {
  id: string
  name: string
  handle: string
  profileImage: string
  community: string
  communityLink: string
  markets: string[]
  experience: string
  liveTrades: boolean
  bestKnownFor: string
  tradingStyle: string[]
  verified: boolean
  sponsored?: boolean
}

export interface Community {
  name: string
  description: string
  members: string
  monthlyFee: string
  features: string[]
  tags: string[]
  image: string
}