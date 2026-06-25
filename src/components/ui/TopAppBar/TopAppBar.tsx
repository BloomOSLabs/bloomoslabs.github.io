import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { navigation } from '../../../config/navigation'

import ThemeToggle from '../ThemeToggle'
import IconButton from '../IconButton'

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 64)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={
        scrolled
          ? 'top-app-bar top-app-bar--floating'
          : 'top-app-bar'
      }
    >
      <div className="top-app-bar-container">
        <Link
  to="/"
  className="top-app-bar-logo"
>
  <img
    src="/favicon.svg"
    alt="BloomOS"
    className="top-app-bar-logo-icon"
  />

  <span className="top-app-bar-logo-text">
    BloomOS
  </span>
</Link>

        <nav className="top-app-bar-nav">
          {navigation.map(item => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? 'top-app-bar-link top-app-bar-link--active'
                  : 'top-app-bar-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="top-app-bar-actions">
          <ThemeToggle />

          <IconButton
            variant="text"
            aria-label="Open navigation menu"
            className="top-app-bar-menu"
          >
            <Menu size={22} />
          </IconButton>
        </div>
      </div>
    </header>
  )
}