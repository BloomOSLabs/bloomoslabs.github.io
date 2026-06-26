import { ArrowRight } from 'lucide-react'

import { GitHub, Telegram } from '../../icons'

import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import LinkButton from '../../ui/LinkButton'

export default function DocumentationCTA () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Need more help?'
            subtitle="Can't find what you're looking for? Reach out to the BloomOS community or contribute improvements to the documentation."
          />

          <div className='ready-to-try-actions'>
            <LinkButton
              to='https://github.com/BloomOSLabs'
              size='large'
              className='button-padding-large'
              startIcon={<GitHub width={20} height={20} />}
            >
              GitHub
            </LinkButton>

            <LinkButton
              to='https://t.me/BloomOSLabs'
              variant='tonal'
              size='large'
              className='button-padding-large'
              startIcon={<Telegram width={20} height={20} />}
            >
              Telegram
            </LinkButton>

            <LinkButton
              to='/team'
              variant='text'
              size='large'
              className='button-padding-large'
              endIcon={<ArrowRight size={18} />}
            >
              Meet the Team
            </LinkButton>
          </div>
        </div>
      </Container>
    </Section>
  )
}
