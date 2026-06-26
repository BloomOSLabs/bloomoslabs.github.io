import {
    ShieldCheck,
    Lock,
    EyeOff,
    Cpu,
    Palette,
    Users
} from 'lucide-react'

import type { ComponentType, SVGProps } from 'react'

export interface Principle {
    title: string
    description: string
    icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const principles: Principle[] = [
    {
        title: 'Privacy First',
        description:
            'Protect user data through sensible defaults, minimal telemetry and privacy-respecting software choices.',
        icon: EyeOff
    },
    {
        title: 'Security by Design',
        description:
            'Continuously strengthen the operating system using proven hardening techniques wherever device hardware permits.',
        icon: ShieldCheck
    },
    {
        title: 'User Control',
        description:
            'Give users clear choices and meaningful control over permissions, applications and system behavior.',
        icon: Lock
    },
    {
        title: 'Performance',
        description:
            'Keep the operating system responsive, lightweight and efficient without unnecessary background overhead.',
        icon: Cpu
    },
    {
        title: 'Thoughtful Design',
        description:
            'Deliver a clean, modern interface inspired by Material Design while avoiding unnecessary complexity.',
        icon: Palette
    },
    {
        title: 'Community Driven',
        description:
            'Develop BloomOS openly with contributions, feedback and collaboration from the open-source community.',
        icon: Users
    }
]