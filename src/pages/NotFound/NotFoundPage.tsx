import { ArrowLeft, Home } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'

import LinkButton from '../../components/ui/LinkButton'

export default function NotFoundPage () {
  const navigate = useNavigate()

  return (
    <Section className='relative overflow-hidden'>
      <Container className='section-grid'>
        <div className='section-inner'>
          <div className='flex min-h-[65vh] flex-col items-center justify-center gap-8 text-center'>
            <span className='section-badge'>Error 404</span>

            <h1 className='section-title text-primary'>Page Not Found</h1>

            <p className='section-description text-secondary max-w-2xl'>
              The page you're looking for doesn't exist, may have been moved, or
              the URL might be incorrect.
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
              <LinkButton
                to='/'
                size='large'
                className='button-padding-large'
                startIcon={<Home size={20} />}
              >
                Go Home
              </LinkButton>

              <button
                type='button'
                onClick={() => navigate(-1)}
                className='inline-flex'
              >
                <LinkButton
                  to='#'
                  variant='tonal'
                  size='large'
                  className='button-padding-large'
                  endIcon={<ArrowLeft size={20} />}
                >
                  Go Back
                </LinkButton>
              </button>
            </div>

            <Link
              to='/documentation'
              className='text-sm text-tertiary transition-colors hover:text-(--md-primary)'
            >
              Looking for installation guides or documentation?
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
