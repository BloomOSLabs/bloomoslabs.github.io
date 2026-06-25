import Switch from '../Switch'

import useTheme from '../../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      checked={theme === 'dark'}
      ariaLabel="Toggle theme"
      onChange={checked => {
        setTheme(checked ? 'dark' : 'light')
      }}
    />
  )
}