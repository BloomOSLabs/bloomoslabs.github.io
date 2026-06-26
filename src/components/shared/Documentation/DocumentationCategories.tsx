import { ArrowRight } from 'lucide-react'

import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'
import CardLayout from '../../layout/CardLayout'

import TonalIcon from '../../ui/TonalIcon'
import LinkButton from '../../ui/LinkButton'

import { documentationCategories } from './documentationCategories'

export default function DocumentationCategories () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Documentation Categories'
            subtitle='Everything is organized into focused guides so both users and developers can quickly find what they need.'
          />

          <div className='section-grid-content'>
            {documentationCategories.map(category => {
              const Icon = category.icon

              return (
                <CardLayout key={category.title} align='start'>
                  <TonalIcon size='small'>
                    <Icon />
                  </TonalIcon>

                  <h3 className='text-primary text-2xl font-semibold'>
                    {category.title}
                  </h3>

                  <p className='text-secondary'>{category.description}</p>

                  <LinkButton
                    to={category.to}
                    variant='text'
                    className='button-padding-large'
                    endIcon={<ArrowRight size={18} />}
                  >
                    Explore
                  </LinkButton>
                </CardLayout>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
