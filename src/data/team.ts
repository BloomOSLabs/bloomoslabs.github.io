export interface TeamMember {
    id: string
    name: string
    role: string
    avatar?: string
    github?: string
    telegram?: string
    description: string
}

export const team: TeamMember[] = [
    {
        id: 'bloomoslabs',
        name: 'Stanly Silas',
        avatar: './maintainer.png',
        role: 'Founder & Lead Maintainer',
        github: 'BloomOSLabs',
        telegram: 'BloomOSLabs',
        description:
            'Leading BloomOS development, device bring-up, infrastructure and long-term roadmap.'
    }
]