import { ArrowRight } from 'lucide-react'

import { statistics } from '../../../data/statistics'

import CardLayout from '../../layout/CardLayout'
import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

import LinkButton from '../../ui/LinkButton'
import TonalIcon from '../../ui/TonalIcon'

export default function Statistics() {
  return (
    <Section className="relative overflow-hidden">
      <Container className="section-grid">
        <div className="section-inner">
          <SectionHeading
            title="BloomOS at a Glance"
            subtitle="Everything you need to know before getting started."
            align="center"
          />

          <div className="section-grid-content">
            {statistics.map(stat => {
              const Icon = stat.icon

              return (
                <CardLayout
                  key={stat.title}
                  align="center"
                >
                  <TonalIcon size="small">
                    <Icon />
                  </TonalIcon>

                  <p className="text-tertiary text-sm font-medium tracking-[0.15em]">
                    {stat.title}
                  </p>

                  <h3 className="text-primary text-4xl font-bold tracking-tight">
                    {stat.value}
                  </h3>

                  <p className="text-secondary max-w-75 text-base leading-8">
                    {stat.description}
                  </p>

                  {stat.action && (
                    <LinkButton
                      to={stat.action.to}
                      variant="text"
                      className="button-padding-large"
                      endIcon={<ArrowRight size={18} />}
                    >
                      {stat.action.label}
                    </LinkButton>
                  )}
                </CardLayout>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}