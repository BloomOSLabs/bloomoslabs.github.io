import { Navigate, useParams } from 'react-router-dom'

import { MarkdownPage } from '../../components/shared/Documentation'

import { devices } from '../../data/devices'

export default function DeviceInstallationPage () {
  const { codename } = useParams()

  const device = devices.find(
    device => device.codename.toLowerCase() === codename?.toLowerCase()
  )

  if (!device) {
    return <Navigate to='/404' replace />
  }

  return <MarkdownPage path={`devices/${device.codename}/installation.md`} />
}
