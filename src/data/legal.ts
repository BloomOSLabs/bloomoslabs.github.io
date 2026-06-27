import {
    BadgeInfo,
    Shield,
    TriangleAlert,
    CodeXml,
    Scale,
    Lock,
    FilePenLine
} from 'lucide-react'

export interface LegalSection {
    title: string
    description: string
    icon: typeof BadgeInfo
}

export const legalLastUpdated = 'June 2026'

export const legalSections: LegalSection[] = [
    {
        title: 'Disclaimer',
        icon: BadgeInfo,
        description:
            'BloomOS is an independent open-source Android operating system provided on an "as is" and "as available" basis without any express or implied warranties. By downloading or using BloomOS, you acknowledge that custom software carries inherent risks.'
    },
    {
        title: 'Device Warranty',
        icon: Shield,
        description:
            "Installing BloomOS generally requires unlocking your device's bootloader. Depending on your manufacturer, this may void all or part of your device warranty. BloomOS does not influence or determine manufacturer warranty policies."
    },
    {
        title: 'Limitation of Liability',
        icon: TriangleAlert,
        description:
            'The BloomOS developers, maintainers and contributors shall not be held liable for data loss, hardware damage, software issues, security incidents, financial losses or any direct, indirect, incidental or consequential damages resulting from the installation or use of BloomOS.'
    },
    {
        title: 'Open Source',
        icon: CodeXml,
        description:
            'BloomOS is built upon numerous open-source projects, including LineageOS and the Android Open Source Project (AOSP). Each component remains subject to its respective license. Source code for BloomOS is publicly available through the BloomOS Labs GitHub organization.'
    },
    {
        title: 'Trademarks',
        icon: Scale,
        description:
            'Android is a trademark of Google LLC. All product names, manufacturers and trademarks mentioned throughout this website remain the property of their respective owners and are used solely for identification and compatibility purposes.'
    },
    {
        title: 'Privacy',
        icon: Lock,
        description:
            'The BloomOS website does not intentionally collect personal information beyond what is required for normal website operation. External services such as GitHub or Telegram are governed by their own privacy policies.'
    },
    {
        title: 'Changes',
        icon: FilePenLine,
        description:
            'This legal information may be updated periodically as BloomOS evolves. Continued use of the website or software constitutes acceptance of the latest version of these terms.'
    }
]