import {
    Download,
    Hammer,
    Smartphone,
    RefreshCw,
    GitPullRequest,
    CircleHelp
} from 'lucide-react'

export interface DocumentationCategory {
    title: string
    description: string
    icon: typeof Download
    to: string
}

export const documentationCategories: DocumentationCategory[] = [
    {
        title: 'Installation',
        description:
            'Unlock, flash and install BloomOS using device-specific instructions.',
        icon: Download,
        to: '/documentation/installation'
    },
    {
        title: 'Building',
        description:
            'Set up the build environment and compile BloomOS from source.',
        icon: Hammer,
        to: '/documentation/building'
    },
    {
        title: 'Device Bring-up',
        description:
            'Documentation for maintainers adding support for new devices.',
        icon: Smartphone,
        to: '/documentation/bringup'
    },
    {
        title: 'OTA Updates',
        description:
            'Learn how BloomOS OTA packages and update infrastructure work.',
        icon: RefreshCw,
        to: '/documentation/ota'
    },
    {
        title: 'Contributing',
        description:
            'Coding standards, pull requests, reporting issues and contributing.',
        icon: GitPullRequest,
        to: '/documentation/contributing'
    },
    {
        title: 'Frequently Asked Questions',
        description:
            'Answers to common questions about BloomOS and supported devices.',
        icon: CircleHelp,
        to: '/documentation/faq'
    }
]