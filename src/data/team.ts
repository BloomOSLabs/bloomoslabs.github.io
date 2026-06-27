// priority: 1 // Founder
// priority: 2 // Core Developer
// priority: 3 // Device Maintainer
// priority: 4 // Contributor
// priority: 5 // Tester

export interface TeamMember {
    id: string
    priority: number,
    name: string
    role: string
    avatar?: string
    github?: string
    telegram?: string
    website?: string,
    description: string
}

export const team: TeamMember[] = [
    {
        id: 'bloomoslabs',
        priority: 1,
        name: 'Stanly Silas',
        avatar: './stanly-founder.png',
        role: 'Founder & Lead Maintainer',
        github: 'stanlysilas',
        telegram: 'stanlysilas',
        website: 'stanlysilas.github.io',
        description:
            'Leading BloomOS development, device bring-up, infrastructure and long-term roadmap.'
    }
]