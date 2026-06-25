import {
    Boxes,
    Smartphone,
    ShieldCheck,
    BadgeCheck,
    GitBranch,
    ArrowRight
} from 'lucide-react'

export interface Statistic {
    title: string
    value: string
    description: string
    icon: typeof Smartphone
    action?: {
        label: string
        to: string
    }
}

export const statistics: Statistic[] = [
    {
        title: 'Supported Devices',
        value: '1',
        description: 'Officially maintained devices.',
        icon: Smartphone,
        action: {
            label: 'View Devices',
            to: '/devices'
        }
    },
    {
        title: 'Latest Android',
        value: '9',
        description: 'Current Android base.',
        icon: Boxes
    },
    {
        title: 'OTA Updates',
        value: 'Supported',
        description: 'Built-in OTA updater.',
        icon: ShieldCheck
    },
    {
        title: 'Release',
        value: '1.0',
        description: 'Latest BloomOS version.',
        icon: BadgeCheck
    },
    {
        title: 'Source',
        value: 'Open',
        description: 'Community-driven development.',
        icon: GitBranch,
        action: {
            label: 'GitHub',
            to: '/about'
        }
    },
    {
        title: 'Project',
        value: 'Active',
        description: 'Actively maintained.',
        icon: ArrowRight
    }
]