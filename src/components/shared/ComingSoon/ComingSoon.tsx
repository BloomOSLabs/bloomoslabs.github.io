import Container from '../../layout/Container'
import Section from '../../layout/Section'

export default function ComingSoon({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <Section className="relative overflow-hidden">
      <Container className="section-grid">
        <div className="section-inner">
          <div className="flex min-h-[65vh] flex-col items-center justify-center gap-8 text-center">
            <span className="section-badge">BloomOS</span>

            <h1 className="section-title text-primary">
              {title}
            </h1>

            <p className="section-description text-secondary max-w-2xl">
              {description}
            </p>

<div className="coming-soon-chip">
  <div className="coming-soon-dot" />

  <span className="coming-soon-text">
    Coming Soon
  </span>
</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}