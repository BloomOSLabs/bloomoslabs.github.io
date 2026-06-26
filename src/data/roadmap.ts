import {
    CheckCircle2,
    Circle,
    Clock3
} from 'lucide-react'

import type { ComponentType, SVGProps } from 'react'

export interface RoadmapItem {
    title: string
    description: string
    status: 'completed' | 'in-progress' | 'planned'
    icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const roadmap: RoadmapItem[] = [
    {
        title: 'BloomOS Branding',
        description: 'Project identity, website and ecosystem.',
        status: 'completed',
        icon: CheckCircle2
    },
    {
        title: 'OTA Infrastructure',
        description: 'Built-in updates with hosted releases.',
        status: 'completed',
        icon: CheckCircle2
    },
    {
        title: 'Official Device Support',
        description: 'Stable support for officially maintained devices.',
        status: 'in-progress',
        icon: Clock3
    },
    {
        title: 'Documentation',
        description: 'Comprehensive installation and development guides.',
        status: 'in-progress',
        icon: Clock3
    },
    {
        title: 'BloomOS Hub',
        description: 'Central application for updates, downloads and community.',
        status: 'planned',
        icon: Circle
    },
    {
        title: 'More Supported Devices',
        description: 'Expand official support to additional devices.',
        status: 'planned',
        icon: Circle
    },
    {
        title: 'Future Android Releases',
        description: 'Upgrade BloomOS to newer Android versions.',
        status: 'planned',
        icon: Circle
    }
]