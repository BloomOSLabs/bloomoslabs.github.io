import { Navigate, useParams } from 'react-router-dom'

import { GitHub, Telegram } from '../../components/icons'

import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'

import SectionHeading from '../../components/layout/SectionHeading'

import DeviceChip from '../../components/ui/DeviceChip'
import LinkButton from '../../components/ui/LinkButton'

import { devices } from '../../data/devices'

export default function DeviceDetailsPage () {
  const { codename } = useParams()

  const device = devices.find(
    device => device.codename.toLowerCase() === codename?.toLowerCase()
  )

  if (!device) {
    return <Navigate to='/404' replace />
  }

  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <div className='device-details'>
            <div className='device-details-image'>
              <img
                src={device.image ?? '/bloom-logo-text-bg.svg'}
                alt={device.name}
                className='device-details-phone'
              />
            </div>

            <div className='device-details-content'>
              <span className='section-badge'>{device.manufacturer}</span>

              <SectionHeading
                title={device.name}
                subtitle={device.codename}
                align='left'
                className='device-heading'
              />

              <div className='device-card-chips'>
                <DeviceChip>{device.status}</DeviceChip>

                <DeviceChip>Android {device.androidVersion}</DeviceChip>
              </div>

              <div className='device-information'>
                <div className='device-information-row'>
                  <span className='text-secondary'>Manufacturer</span>

                  <span className='text-primary'>{device.manufacturer}</span>
                </div>

                <div className='device-information-row'>
                  <span className='text-secondary'>Codename</span>

                  <span className='text-primary'>{device.codename}</span>
                </div>

                <div className='device-information-row'>
                  <span className='text-secondary'>Android</span>

                  <span className='text-primary'>{device.androidVersion}</span>
                </div>

                <div className='device-information-row'>
                  <span className='text-secondary'>Maintainer</span>

                  <div className='device-maintainers'>
                    {device.maintainers.map((maintainer, index) => (
                      <div key={maintainer.id} className='device-maintainer'>
                        <span className='text-primary'>{maintainer.name}</span>

                        <div className='device-maintainer-socials'>
                          {maintainer.github && (
                            <a
                              href={`https://github.com/${maintainer.github}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='device-maintainer-link'
                              aria-label={`${maintainer.name} GitHub`}
                            >
                              <GitHub width={18} height={18} />
                            </a>
                          )}

                          {maintainer.telegram && (
                            <a
                              href={`https://t.me/${maintainer.telegram}`}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='device-maintainer-link'
                              aria-label={`${maintainer.name} Telegram`}
                            >
                              <Telegram width={18} height={18} />
                            </a>
                          )}
                        </div>

                        {index < device.maintainers.length - 1 && (
                          <span className='text-tertiary'>,</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='device-details-actions'>
                <LinkButton to={`/downloads/${device.codename}`} fullWidth>
                  Downloads
                </LinkButton>
                <LinkButton
                  to={`/documentation/installation/${device.codename}`}
                  variant='tonal'
                  fullWidth
                >
                  Installation Guide
                </LinkButton>
              </div>

              <div className='device-changelog'>
                <h2 className='text-primary text-2xl font-semibold'>
                  Latest Changelog
                </h2>
                {
                  <pre className='device-changelog-content'>
                    Changelog coming soon...
                  </pre>
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
