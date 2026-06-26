import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import TonalIcon from '../../ui/TonalIcon'

import { roadmap } from '../../../data/roadmap'

export default function Roadmap () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Roadmap'
            subtitle='Where BloomOS is heading next.'
          />

          <div className='roadmap'>
            {roadmap.map(item => {
              const Icon = item.icon

              return (
                <div key={item.title} className='roadmap-item'>
                  <TonalIcon
                    size='small'
                    className={`roadmap-icon roadmap-icon--${item.status}`}
                  >
                    <Icon />
                  </TonalIcon>

                  <div className='roadmap-content'>
                    <h3 className='text-primary text-xl font-semibold'>
                      {item.title}
                    </h3>

                    <p className='text-secondary'>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
