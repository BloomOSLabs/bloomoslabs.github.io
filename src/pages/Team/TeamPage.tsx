import { ArrowRight } from 'lucide-react'

import { GitHub } from '../../components/icons'

import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'
import SectionHeading from '../../components/layout/SectionHeading'

import TeamCard from '../../components/ui/TeamCard'
import LinkButton from '../../components/ui/LinkButton'

import { devices } from '../../data/devices'
import { team } from '../../data/team'
import PageTransition from '../../components/layout/PageTransition'

export default function TeamPage () {
  const sortedTeam = [...team].sort((a, b) => a.priority - b.priority)

  return (
    <PageTransition>
      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Meet the Team'
              subtitle='The people building and maintaining BloomOS.'
              align='center'
            />

            <div className='section-grid-content'>
              {sortedTeam.map(member => (
                <TeamCard
                  key={member.id}
                  member={member}
                  maintainedDevices={devices.filter(device =>
                    device.maintainers.some(
                      maintainer => maintainer.id === member.id
                    )
                  )}
                />
              ))}
            </div>

            <div className='team-cta'>
              <SectionHeading
                title='Interested in contributing?'
                subtitle='BloomOS is an open-source project. Contributions, device maintainers and testers are always welcome.'
                align='center'
              />

              <div className='ready-to-try-actions'>
                <LinkButton
                  to='/documentation'
                  size='large'
                  className='button-padding-large'
                  startIcon={<ArrowRight size={20} />}
                >
                  Documentation
                </LinkButton>

                <LinkButton
                  to='https://github.com/BloomOSLabs'
                  variant='tonal'
                  size='large'
                  className='button-padding-large'
                  endIcon={<GitHub width={20} height={20} />}
                >
                  GitHub
                </LinkButton>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  )
}
