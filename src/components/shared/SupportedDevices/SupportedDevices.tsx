import { ArrowRight, Smartphone } from 'lucide-react'

import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import LinkButton from '../../ui/LinkButton'

import { devices } from '../../../data/devices'

export default function SupportedDevices () {
  return (
    <Section>
      <Container>
        <SectionHeading
          title='Supported Devices'
          subtitle='Officially maintained devices receiving BloomOS updates.'
          align='center'
        />

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {devices.map(device => (
            <article
              key={device.codename}
              className='
                rounded-4xl
                bg-(--md-surface-container-low)
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-(--md-surface-container)
                hover:shadow-xl
              '
            >
              <div
                className='
                  mb-6
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-(--md-primary-container)
                  text-(--md-primary)
                '
              >
                <Smartphone size={30} />
              </div>

              <h3 className='text-2xl font-semibold'>{device.name}</h3>

              <p className='mt-1 text-black/60'>{device.codename}</p>

              <div className='mt-6 space-y-2 text-sm'>
                <div className='flex justify-between'>
                  <span>Android</span>
                  <span>{device.androidVersion}</span>
                </div>

                <div className='flex justify-between'>
                  <span>Status</span>
                  <span className='text-(--md-primary)'>{device.status}</span>
                </div>

                <div className='flex items-start justify-between gap-4'>
                  <span>Maintainers</span>

                  <div className='text-right'>
                    {device.maintainers.map(maintainer => (
                      <div key={maintainer.id}>{maintainer.name}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <LinkButton
                  to={`/devices/${device.codename.toLowerCase()}`}
                  variant='filled'
                  fullWidth
                  endIcon={<ArrowRight size={18} />}
                >
                  View Device
                </LinkButton>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
