import clsx from 'clsx'

interface VersionSelectorProps {
  versions: string[]
  value: string
  onChange: (version: string) => void
}

export default function VersionSelector ({
  versions,
  value,
  onChange
}: VersionSelectorProps) {
  return (
    <div className='version-selector'>
      {versions.map(version => (
        <button
          key={version}
          type='button'
          className={clsx(
            'version-selector-chip',
            version === value && 'version-selector-chip--active'
          )}
          onClick={() => onChange(version)}
        >
          {version}
        </button>
      ))}
    </div>
  )
}
