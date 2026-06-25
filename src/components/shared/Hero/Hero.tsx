import { ArrowRight, Download } from 'lucide-react'

import Container from '../../layout/Container'
import Section from '../../layout/Section'

import LinkButton from '../../ui/LinkButton'

export default function Hero () {
  return (
    <Section className='relative overflow-hidden'>
      <div
        style={{
          background:
            'radial-gradient(circle, var(--md-primary) 0%, transparent 70%)'
        }}
      />

      <Container className='section-grid section-grid--hero'>
        <div className='section-inner'>
          <span className='section-badge'>BloomOS</span>

          <h1 className='section-title text-primary'>
            Beautiful.
            <br />
            Fast.
            <br />
            Private.
          </h1>

          <p className='section-description text-secondary'>
            A clean Android experience focused on performance, privacy and
            simplicity without unnecessary additions.
          </p>

          <div className='section-actions'>
            <LinkButton
              to='/downloads'
              size='large'
              className='button-padding-large'
              startIcon={<Download size={20} />}
            >
              Download
            </LinkButton>

            <LinkButton
              to='/devices'
              variant='tonal'
              size='large'
              className='button-padding-large'
              endIcon={<ArrowRight size={20} />}
            >
              Supported Devices
            </LinkButton>
          </div>
        </div>

        <div className="section-device">
  <div className="device-frame">
    <div className="device-preview">
      <span className="device-preview-badge">
        Preview
      </span>

      <div className="device-preview-content">
        <img
          src="/bloom-logo-text.svg"
          alt="BloomOS"
          className="device-preview-logo"
        />

        <h3 className="device-preview-title">
          BloomOS
        </h3>

        <p className="device-preview-text">
          Device preview coming soon
        </p>
      </div>
    </div>
  </div>
</div>
      </Container>
    </Section>
  )
}
