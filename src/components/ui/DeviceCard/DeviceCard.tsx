import { ArrowRight } from 'lucide-react'

import CardLayout from '../../layout/CardLayout'

import LinkButton from '../LinkButton'
import DeviceChip from '../DeviceChip'

import type { Device } from '../../../data/devices'

interface DeviceCardProps {
  device: Device
}

export default function DeviceCard ({ device }: DeviceCardProps) {
  return (
    <CardLayout className='device-card'>
      <img
        src={device.image ?? '/bloom-logo-text.svg'}
        alt={device.name}
        className='device-card-image'
      />

      <div>
        <h3 className='text-2xl font-semibold text-primary'>{device.name}</h3>

        <p className='text-secondary'>{device.codename}</p>
      </div>

      <div className='device-card-chips'>
        <DeviceChip>{device.status}</DeviceChip>
        <DeviceChip>Android {device.androidVersion}</DeviceChip>
      </div>

      <LinkButton
        to={`/devices/${device.codename}`}
        fullWidth
        className='button-padding-large'
        endIcon={<ArrowRight size={18} />}
      >
        View Device
      </LinkButton>
    </CardLayout>
  )
}
