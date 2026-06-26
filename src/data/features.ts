import {
  ShieldCheck,
  Lock,
  CodeXml,
  Layers3,
  Smartphone,
  Wrench,
  Sparkles
} from 'lucide-react'

export interface Feature {
  icon: typeof ShieldCheck
  title: string
  description: string
}

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: 'Privacy & Security',
    description:
      'BloomOS is designed around practical privacy improvements and continuous security hardening while remaining usable on everyday devices.'
  },
  {
    icon: Lock,
    title: 'User Control',
    description:
      'Your device should work for you. BloomOS prioritizes user choice, transparent behavior and minimizing unnecessary data collection.'
  },
  {
    icon: Layers3,
    title: 'Built on LineageOS',
    description:
      'Powered by the stability of LineageOS while extending it with BloomOS features, privacy enhancements and long-term maintainability.'
  },
  {
    icon: Smartphone,
    title: 'Reliable Device Support',
    description:
      'Officially supported devices receive dedicated maintenance, testing, bug fixes and seamless OTA updates.'
  },
  {
    icon: Wrench,
    title: 'Developer Friendly',
    description:
      'Organized source trees, reproducible builds and contributor-focused tooling make BloomOS approachable for developers and maintainers.'
  },
  {
    icon: CodeXml,
    title: 'Fully Open Source',
    description:
      'Every component is developed openly with public repositories, transparent issue tracking and community contributions.'
  },
  {
    icon: Sparkles,
    title: 'BloomOS Ecosystem',
    description:
      'A growing ecosystem including the website, OTA infrastructure, documentation, device information and future BloomOS Hub services.'
  }
]