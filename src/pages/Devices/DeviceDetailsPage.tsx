import { Navigate, useParams, useNavigate } from 'react-router-dom'

import { GitHub, Telegram } from '../../components/icons'

import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'

import SectionHeading from '../../components/layout/SectionHeading'

import DeviceChip from '../../components/ui/DeviceChip'
import Dialog from '../../components/ui/Dialog'
import LinkButton from '../../components/ui/LinkButton'

import { devices, type Device } from '../../data/devices'
import { useEffect, useState } from 'react'

import { VersionSelector } from '../../components/ui/OTA'
import PageTransition from '../../components/layout/PageTransition'
import { fetchChangelog, type Release } from '../../lib/releases'

export default function DeviceDetailsPage () {
  const { codename } = useParams()

  function getDownloadsUrl (device: Device, version: string) {
    return `https://sourceforge.net/projects/bloomoslabs/files/${device.codename}/${version}/`
  }

  const device = devices.find(
    device => device.codename.toLowerCase() === codename?.toLowerCase()
  )

  if (!device) {
    return <Navigate to='/404' replace />
  }

  const currentDevice = device

  const navigate = useNavigate()

  const [dialogOpen, setDialogOpen] = useState(false)

  const [destination, setDestination] = useState('')

  const [releases, setReleases] = useState<Release[]>([])
  const [selectedVersion, setSelectedVersion] = useState('')
  const [loadingRelease, setLoadingRelease] = useState(true)

  useEffect(() => {
    if (!currentDevice) return

    async function loadRelease () {
      try {
        const data = await fetchChangelog(currentDevice.codename)

        setReleases(data)

        if (data.length > 0) {
          setSelectedVersion(data[0].version)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoadingRelease(false)
      }
    }

    loadRelease()
  }, [currentDevice])

  const release =
    releases.find(r => r.version === selectedVersion) ?? releases[0]

  return (
    <PageTransition>
      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <div className='device-details'>
              <div className='device-details-image'>
                <img
                  src={currentDevice.image ?? '/bloom-logo-text-bg.svg'}
                  alt={currentDevice.name}
                  className='device-details-phone'
                />
              </div>

              <div className='device-details-content'>
                <span className='section-badge'>
                  {currentDevice.manufacturer}
                </span>

                <SectionHeading
                  title={currentDevice.name}
                  subtitle={
                    currentDevice.codename +
                    ', ' +
                    currentDevice.alternateCodenames
                  }
                  align='left'
                  className='device-heading'
                />

                <div className='device-version-selector'>
                  {!loadingRelease && releases.length > 0 && (
                    <>
                      <p className='text-secondary device-version-label'>
                        BloomOS version
                      </p>

                      <VersionSelector
                        versions={releases.map(release => release.version)}
                        value={selectedVersion}
                        onChange={setSelectedVersion}
                      />
                    </>
                  )}
                </div>

                <div className='device-card-chips'>
                  <DeviceChip>{currentDevice.status}</DeviceChip>

                  <DeviceChip>
                    Android {currentDevice.androidVersion}
                  </DeviceChip>
                </div>

                <div className='device-information'>
                  <div className='device-information-row'>
                    <span className='text-secondary'>Manufacturer</span>

                    <span className='text-primary'>
                      {currentDevice.manufacturer}
                    </span>
                  </div>

                  <div className='device-information-row'>
                    <span className='text-secondary'>Codename</span>

                    <span className='text-primary'>
                      {currentDevice.codename}
                    </span>
                  </div>

                  <div className='device-information-row'>
                    <span className='text-secondary'>Alternate Codenames</span>

                    <span className='text-primary'>
                      {currentDevice.alternateCodenames}
                    </span>
                  </div>

                  <div className='device-information-row'>
                    <span className='text-secondary'>Android</span>

                    <span className='text-primary'>
                      {currentDevice.androidVersion}
                    </span>
                  </div>

                  <div className='device-information-row'>
                    <span className='text-secondary'>Maintainer</span>

                    <div className='device-maintainers'>
                      {currentDevice.maintainers.map((maintainer, index) => (
                        <div key={maintainer.id} className='device-maintainer'>
                          <span className='text-primary'>
                            {maintainer.name}
                          </span>

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

                          {index < currentDevice.maintainers.length - 1 && (
                            <span className='text-tertiary'>,</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='device-details-actions'>
                  <LinkButton
                    fullWidth
                    onClick={() => {
                      setDestination('')
                      setDialogOpen(true)
                    }}
                  >
                    Downloads
                  </LinkButton>

                  <LinkButton
                    variant='tonal'
                    fullWidth
                    onClick={() => {
                      setDestination(
                        `/documentation/installation/${currentDevice.codename}`
                      )
                      setDialogOpen(true)
                    }}
                  >
                    Installation Guide
                  </LinkButton>
                </div>

                <div>
                  <SectionHeading
                    title='Release Notes'
                    subtitle='Browse the changelog and known issues for each BloomOS release.'
                    align='left'
                    className='device-changelog'
                  />

                  {loadingRelease ? (
                    <p className='text-secondary'>
                      Loading release information...
                    </p>
                  ) : release ? (
                    <>
                      <div className='device-card-chips'>
                        <DeviceChip>{release.releaseType}</DeviceChip>

                        <DeviceChip>
                          Android {release.androidVersion}
                        </DeviceChip>

                        <DeviceChip>{release.securityPatch}</DeviceChip>

                        <DeviceChip>{release.releaseDate}</DeviceChip>
                      </div>

                      <div className='device-release-section'>
                        <h3 className='text-primary text-xl font-semibold'>
                          What's New
                        </h3>

                        <ul className='device-changelog-list'>
                          {release.changelog.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {release.knownIssues.length > 0 && (
                        <div className='device-release-section'>
                          <h3 className='text-primary text-xl font-semibold'>
                            Known Issues
                          </h3>

                          <ul className='device-known-issues'>
                            {release.knownIssues.map(issue => (
                              <li key={issue}>{issue}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className='text-secondary'>
                      No release information is currently available.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Dialog
          open={dialogOpen}
          title='Before You Continue'
          confirmText='I Understand'
          cancelText='Cancel'
          onCancel={() => setDialogOpen(false)}
          onConfirm={() => {
            setDialogOpen(false)

            if (destination) {
              navigate(destination)
              return
            }

            window.location.href = getDownloadsUrl(
              currentDevice,
              selectedVersion
            )
          }}
        >
          <p>
            Installing BloomOS requires unlocking your device's bootloader and
            modifying system software.
          </p>

          <ul className='dialog-list'>
            <li>
              Your device warranty may be void after unlocking the bootloader.
            </li>

            <li>
              Incorrect installation can result in data loss, boot loops or an
              unbootable device.
            </li>

            <li>
              Create a complete backup of all important data before proceeding.
            </li>

            <li>
              Follow the installation guide for your specific device carefully.
            </li>
          </ul>

          <p>
            BloomOS is provided without warranty. By continuing, you acknowledge
            that you understand the risks involved.
          </p>
        </Dialog>
      </Section>
    </PageTransition>
  )
}
