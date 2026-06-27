import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'
import SectionHeading from '../../components/layout/SectionHeading'

import DeviceCard from '../../components/ui/DeviceCard'
import FilterChip from '../../components/ui/FilterChip'

import { devices } from '../../data/devices'
import PageTransition from '../../components/layout/PageTransition'

export default function DevicesPage () {
  const [search, setSearch] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('All')

  const brands = useMemo(
    () => [
      'All',
      ...new Set(devices.map(device => device.manufacturer).sort())
    ],
    []
  )

  const filteredDevices = useMemo(() => {
    const query = search.toLowerCase().trim()

    return devices.filter(device => {
      const matchesBrand =
        selectedBrand === 'All' || device.manufacturer === selectedBrand

      const matchesSearch =
        device.name.toLowerCase().includes(query) ||
        device.codename.toLowerCase().includes(query) ||
        device.manufacturer.toLowerCase().includes(query)

      return matchesBrand && matchesSearch
    })
  }, [search, selectedBrand])

  return (
    <PageTransition>
      <Section>
        <Container className='section-grid'>
          <div className='section-inner'>
            <SectionHeading
              title='Supported Devices'
              subtitle='Officially supported devices receiving BloomOS builds.'
            />

            <div className='devices-toolbar'>
              <div className='devices-search'>
                <Search size={18} />

                <input
                  type='text'
                  placeholder='Search devices...'
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                />
              </div>

              <div className='device-filter-chips'>
                {brands.map(brand => (
                  <FilterChip
                    key={brand}
                    selected={brand === selectedBrand}
                    onClick={() => setSelectedBrand(brand)}
                  >
                    {brand}
                  </FilterChip>
                ))}
              </div>

              <p className='devices-count text-secondary'>
                {filteredDevices.length} device
                {filteredDevices.length !== 1 && 's'}
              </p>
            </div>

            <div className='section-grid-content'>
              {filteredDevices.length > 0 ? (
                filteredDevices.map(device => (
                  <DeviceCard key={device.codename} device={device} />
                ))
              ) : (
                <div className='devices-empty'>
                  <h3 className='text-primary text-2xl font-semibold'>
                    No devices found
                  </h3>

                  <p className='text-secondary'>
                    Try another search term or manufacturer.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </PageTransition>
  )
}
