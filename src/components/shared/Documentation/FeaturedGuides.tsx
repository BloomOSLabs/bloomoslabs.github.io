import { ArrowRight } from 'lucide-react'

import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'
import CardLayout from '../../layout/CardLayout'

import LinkButton from '../../ui/LinkButton'

const guides = [
  {
    title: 'Installing BloomOS',
    description:
      'Follow the official installation guide for your supported device.',
    to: '/documentation/installation'
  },
  {
    title: 'Build BloomOS from Source',
    description: 'Set up the build environment and compile BloomOS yourself.',
    to: '/documentation/building'
  },
  {
    title: 'Device Bring-up',
    description: 'Learn how to add official support for a new device.',
    to: '/documentation/bringup'
  },
  {
    title: 'OTA Updates',
    description:
      'Understand the BloomOS OTA infrastructure and release workflow.',
    to: '/documentation/ota'
  }
]

export default function FeaturedGuides () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Featured Guides'
            subtitle='The most commonly used documentation for users and maintainers.'
          />

          <div className='section-grid-content'>
            {guides.map(guide => (
              <CardLayout key={guide.title} align='start'>
                <h3 className='text-primary text-2xl font-semibold'>
                  {guide.title}
                </h3>

                <p className='text-secondary'>{guide.description}</p>

                <LinkButton
                  to={guide.to}
                  variant='text'
                  className='button-padding-large'
                  endIcon={<ArrowRight size={18} />}
                >
                  Read Guide
                </LinkButton>
              </CardLayout>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
