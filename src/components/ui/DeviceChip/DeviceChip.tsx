interface DeviceChipProps {
  children: React.ReactNode
}

export default function DeviceChip ({ children }: DeviceChipProps) {
  return <span className='device-chip'>{children}</span>
}
