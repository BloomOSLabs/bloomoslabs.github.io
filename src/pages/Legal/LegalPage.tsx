import Container from '../../components/layout/Container'
import PageTransition from '../../components/layout/PageTransition'
import Section from '../../components/layout/Section'
import SectionHeading from '../../components/layout/SectionHeading'
import TonalIcon from '../../components/ui/TonalIcon'
import { legalLastUpdated, legalSections } from '../../data/legal'

export default function LegalPage () {
  return (
    <PageTransition>
      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Legal'
              subtitle='Important information regarding BloomOS, its software and the use of this website.'
              align='center'
            />

            <div className='legal-content'>
              <div className='legal-content'>
                {legalSections.map(section => {
                  const Icon = section.icon

                  return (
                    <section key={section.title} className='legal-section'>
                      <div className='legal-heading'>
                        <TonalIcon size='small'>
                          <Icon />
                        </TonalIcon>

                        <h2 className='legal-title'>{section.title}</h2>
                      </div>

                      <p className='text-secondary'>{section.description}</p>
                    </section>
                  )
                })}
              </div>
            </div>

            <p className='legal-updated text-tertiary'>
              Last updated: {legalLastUpdated}
            </p>
          </div>
        </Container>
      </Section>
    </PageTransition>
  )
}
