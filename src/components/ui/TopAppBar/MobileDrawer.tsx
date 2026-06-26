import { X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { navigation } from '../../../config/navigation'

import ThemeToggle from '../ThemeToggle'
import IconButton from '../IconButton'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer ({ open, onClose }: MobileDrawerProps) {
  return (
    <>
      <div
        className={`mobile-drawer-scrim ${
          open ? 'mobile-drawer-scrim--visible' : ''
        }`}
        onClick={onClose}
      />

      <aside className={`mobile-drawer ${open ? 'mobile-drawer--open' : ''}`}>
        <div className='mobile-drawer-header'>
          <h2 className='text-primary text-xl font-semibold'>BloomOS</h2>

          <IconButton
            variant='text'
            aria-label='Close navigation'
            onClick={onClose}
          >
            <X size={22} />
          </IconButton>
        </div>

        <nav className='mobile-drawer-nav'>
          {navigation.map(item => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={({ isActive }) =>
                isActive
                  ? 'mobile-drawer-link mobile-drawer-link--active'
                  : 'mobile-drawer-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className='mobile-drawer-divider' />

        <div className='mobile-drawer-theme'>
          <span className='text-secondary'>Theme</span>

          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}
