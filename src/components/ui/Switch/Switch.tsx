import clsx from 'clsx'

interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
  ariaLabel?: string
}

export default function Switch({
  checked,
  onChange,
  className,
  ariaLabel
}: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={() => onChange(!checked)}
      className={clsx(
        'm3-switch',
        checked && 'm3-switch--checked',
        className
      )}
    >
      <span className="m3-switch-thumb" />
    </button>
  )
}