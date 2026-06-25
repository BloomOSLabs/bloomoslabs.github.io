import { Cpu, ShieldCheck, CodeXml } from 'lucide-react'

import CardLayout from '../../layout/CardLayout'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import TonalIcon from '../../ui/TonalIcon'

const features = [
  {
    icon: Cpu,
    title: 'Performance',
    description:
      'Optimized to deliver a smooth, responsive and reliable Android experience for everyday use.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy',
    description:
      'Built with user privacy in mind while keeping Android clean, lightweight and free from unnecessary additions.'
  },
  {
    icon: CodeXml,
    title: 'Open Source',
    description:
      'Developed transparently with community contributions and source code available for everyone.'
  }
]

export default function WhyBloomOS() {
  return (
    <Section className="relative overflow-hidden">
      <Container className="section-grid">
        <div className="section-inner">
          <SectionHeading
            title="Why BloomOS?"
            subtitle="Designed around the principles that matter most for a modern Android experience."
            align="center"
          />

          <div className="section-grid-content">
            {features.map(feature => {
              const Icon = feature.icon

              return (
                <CardLayout
                  key={feature.title}
                  align="center"
                >
                  <TonalIcon size="small">
                    <Icon />
                  </TonalIcon>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-primary">
                    {feature.title}
                  </h3>

                  <p className="mt-5 max-w-75 text-base leading-8 text-secondary">
                    {feature.description}
                  </p>
                </CardLayout>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}