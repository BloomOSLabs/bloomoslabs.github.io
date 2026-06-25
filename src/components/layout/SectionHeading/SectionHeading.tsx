import clsx from 'clsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className
}: SectionHeadingProps) {
  return (
    <div
  className={clsx(
    'flex flex-col gap-6',
    align === 'center' && 'text-center',
    className
  )}
>
  <h2 className="text-primary text-4xl font-bold tracking-tight lg:text-5xl">
    {title}
  </h2>

  {subtitle && (
    <p className="text-secondary text-lg leading-8">
      {subtitle}
    </p>
  )}
</div>
  )
}