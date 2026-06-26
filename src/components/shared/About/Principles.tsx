import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import CardLayout from '../../layout/CardLayout'

import { principles } from '../../../data/principles'
import TonalIcon from '../../ui/TonalIcon'

export default function Principles () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Core Principles'
            subtitle='The values that guide every decision made throughout the development of BloomOS.'
          />

          <div className='section-grid-content'>
            {principles.map(principle => {
              const Icon = principle.icon

              return (
                <CardLayout key={principle.title}>
                  <TonalIcon size='small'>
                    <Icon />
                  </TonalIcon>

                  <h3 className='text-primary text-2xl font-semibold'>
                    {principle.title}
                  </h3>

                  <p className='text-secondary'>{principle.description}</p>
                </CardLayout>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
