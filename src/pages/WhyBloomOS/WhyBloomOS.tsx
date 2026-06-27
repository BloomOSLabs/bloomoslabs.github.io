import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'
import SectionHeading from '../../components/layout/SectionHeading'
import CardLayout from '../../components/layout/CardLayout'

import TonalIcon from '../../components/ui/TonalIcon'

import { features } from '../../data/features'
import PageTransition from '../../components/layout/PageTransition'

export default function WhyBloomOSPage () {
  return (
    <PageTransition>
      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Why BloomOS?'
              subtitle='Privacy-first engineering without compromising usability or performance.'
            />

            <div>
              <p className='text-center text-lg leading-8 text-secondary'>
                BloomOS is built on the belief that privacy and security should
                be the foundation of every Android device. Rather than adding
                unnecessary complexity, we focus on hardening the operating
                system, protecting user data and delivering a polished
                experience that remains fast, intuitive and reliable.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Core Principles'
              subtitle='The values guiding every design and engineering decision.'
            />

            <div className='section-grid-content'>
              {features.map(feature => {
                const Icon = feature.icon

                return (
                  <CardLayout key={feature.title}>
                    <TonalIcon size='small'>
                      <Icon />
                    </TonalIcon>

                    <h3 className='text-2xl font-semibold text-primary'>
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
    </PageTransition>
  )
}
