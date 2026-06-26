import { ArrowRight } from 'lucide-react'

import { GitHub } from '../../icons'

import Container from '../../layout/Container'
import Section from '../../layout/Section'

import LinkButton from '../../ui/LinkButton'

export default function DocumentationHero () {
  return (
    <Section>
      <Container className='section-grid section-grid--hero'>
        <div className='section-inner'>
          <span className='section-badge'>Documentation</span>

          <h1 className='section-title text-primary'>
            Everything you need
            <br />
            to build, install
            <br />
            and contribute.
          </h1>

          <p className='section-description text-secondary'>
            Explore installation guides, build instructions, developer
            documentation and contribution resources for BloomOS. Whether you're
            flashing your first device or bringing up support for a new one,
            you'll find everything in one place.
          </p>

          <div className='section-actions'>
            <LinkButton
              to='/devices'
              size='large'
              className='button-padding-large'
              endIcon={<ArrowRight size={20} />}
            >
              Browse Devices
            </LinkButton>

            <LinkButton
              to='https://github.com/BloomOSLabs'
              variant='tonal'
              size='large'
              className='button-padding-large'
              startIcon={<GitHub width={20} height={20} />}
            >
              Source Code
            </LinkButton>
          </div>
        </div>

        <div className='about-hero-visual'>
          <div className='about-logo-card'>
            <h3 className='about-logo-title'>BloomOS Docs</h3>

            <p className='about-logo-subtitle'>
              Installation • Development • Contributing
            </p>

            <div className='documentation-stats'>
              <div>
                <span className='documentation-number'>6+</span>
                <span className='documentation-label'>Categories</span>
              </div>

              <div>
                <span className='documentation-number'>100%</span>
                <span className='documentation-label'>Open Source</span>
              </div>

              <div>
                <span className='documentation-number'>∞</span>
                <span className='documentation-label'>Community Driven</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
