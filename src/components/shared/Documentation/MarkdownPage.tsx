import { useEffect, useState } from 'react'

import MarkdownRenderer from './MarkdownRenderer'

import Container from '../../layout/Container'
import Section from '../../layout/Section'

import { DOCUMENTATION_BASE } from '../../../config/documentation'

interface MarkdownPageProps {
  path: string
}

export default function MarkdownPage ({ path }: MarkdownPageProps) {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let ignore = false

    async function load () {
      try {
        setLoading(true)
        setError(false)

        const response = await fetch(`${DOCUMENTATION_BASE}/${path}`)

        if (!response.ok) {
          throw new Error()
        }

        const markdown = await response.text()

        if (!ignore) {
          setContent(markdown)
        }
      } catch {
        if (!ignore) {
          setError(true)
        }
      } finally {
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    load()

    return () => {
      ignore = true
    }
  }, [path])

  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          {loading && (
            <p className='markdown-status text-secondary'>
              Loading documentation...
            </p>
          )}

          {error && (
            <p className='markdown-status text-secondary'>
              Unable to load this documentation.
            </p>
          )}

          {!loading && !error && <MarkdownRenderer>{content}</MarkdownRenderer>}
        </div>
      </Container>
    </Section>
  )
}
