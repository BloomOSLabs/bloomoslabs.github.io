import { ArrowRight } from 'lucide-react'

import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import LinkButton from '../../ui/LinkButton'

export default function ReadyToTry () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Ready to Try BloomOS?'
            subtitle='Browse supported devices and install BloomOS on your device today.'
            align='center'
          />

          <div className='ready-to-try-actions'>
            <LinkButton
              to='/devices'
              size='large'
              className='button-padding-large'
              endIcon={<ArrowRight size={20} />}
            >
              View Supported Devices
            </LinkButton>

            {/* <LinkButton
              to='/documentation'
              variant='tonal'
              size='large'
              className='button-padding-large'
            >
              Documentation
            </LinkButton> */}
          </div>
        </div>
      </Container>
    </Section>
  )
}
