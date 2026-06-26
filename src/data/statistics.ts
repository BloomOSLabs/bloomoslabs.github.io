import type { ComponentType, SVGProps } from 'react'

import {
    Smartphone,
    ShieldCheck,
    BadgeCheck,
    GitBranch,
    ArrowRight
} from 'lucide-react'


import { Android } from '../components/icons'

export interface Statistic {
    title: string
    value: string
    description: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
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
        icon: Smartphone
    },
    {
        title: 'Latest Android',
        value: '9',
        description: 'Current Android base.',
        icon: Android
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
    },
    {
        title: 'Project',
        value: 'Active',
        description: 'Actively maintained.',
        icon: ArrowRight
    }
]