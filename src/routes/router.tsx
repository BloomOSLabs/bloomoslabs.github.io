import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/Home/HomePage'
import WhyBloomOSPage from '../pages/WhyBloomOS/WhyBloomOS'
import DevicesPage from '../pages/Devices/DevicesPage'
import DeviceDetailsPage from '../pages/Devices/DeviceDetailsPage'
import DocumentationPage from '../pages/Documentation/DocumentationPage'
import DocumentationContentPage from '../pages/Documentation/DocumentationContentPage'
import AboutPage from '../pages/About/AboutPage'
import TeamPage from '../pages/Team/TeamPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'
import DeviceInstallationPage from '../pages/Documentation/DeviceInstallationPage'
import { AnimatePresence } from 'framer-motion'
import LegalPage from '../pages/Legal/LegalPage'

export default function Router () {
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />

            <Route path='/why-bloomos' element={<WhyBloomOSPage />} />

            <Route path='/devices' element={<DevicesPage />} />

            <Route path='/devices/:codename' element={<DeviceDetailsPage />} />

            <Route path='/documentation' element={<DocumentationPage />} />

            <Route
              path='/documentation/:section'
              element={<DocumentationContentPage />}
            />

            <Route
              path='/documentation/installation/:codename'
              element={<DeviceInstallationPage />}
            />

            <Route path='/about' element={<AboutPage />} />

            <Route path='/legal' element={<LegalPage />} />

            <Route path='/team' element={<TeamPage />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  )
}
