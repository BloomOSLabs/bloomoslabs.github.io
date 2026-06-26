import { Cpu, ShieldCheck, CodeXml } from 'lucide-react'

import CardLayout from '../../layout/CardLayout'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import TonalIcon from '../../ui/TonalIcon'

const features = [
  {
    icon: ShieldCheck,
    title: 'Privacy & Security',
    description:
      'Practical security hardening and privacy improvements without compromising usability.'
  },
  {
    icon: Cpu,
    title: 'Fast & Reliable',
    description:
      'Optimized for smooth performance, responsive interactions and dependable everyday use.'
  },
  {
    icon: CodeXml,
    title: 'Open Source',
    description:
      'Developed transparently with public source code and community contributions.'
  }
]

export default function AtaGlance () {
  return (
    <Section className='relative overflow-hidden'>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='BloomOS at a Glance'
            subtitle='Everything you need to know about BloomOS in a few key highlights.'
          />

          <div className='section-grid-content'>
            {features.map(feature => {
              const Icon = feature.icon

              return (
                <CardLayout key={feature.title}>
                  <TonalIcon size='small'>
                    <Icon />
                  </TonalIcon>

                  <h3 className='mt-2 text-2xl font-semibold tracking-tight text-primary'>
                    {feature.title}
                  </h3>

                  <p className='text-secondary'>{feature.description}</p>
                </CardLayout>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
