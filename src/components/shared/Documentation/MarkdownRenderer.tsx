import { Link } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import './markdown.css'

interface MarkdownRendererProps {
  children: string
}

function resolveInternalLink (href: string) {
  let route = href

  route = route.replace(/^(\.\.\/)+/, '')

  route = route.replace(/^docs\//, '')

  route = route.replace(/README\.md$/, '')

  route = route.replace(/\.md$/, '')

  return `/documentation/${route}`.replace(/\/+/g, '/')
}

export default function MarkdownRenderer ({ children }: MarkdownRendererProps) {
  return (
    <article className='markdown-content'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'append'
            }
          ]
        ]}
        components={{
          h1: props => <h1 className='markdown-h1' {...props} />,

          h2: props => <h2 className='markdown-h2' {...props} />,

          h3: props => <h3 className='markdown-h3' {...props} />,

          h4: props => <h4 className='markdown-h4' {...props} />,

          p: props => <p className='markdown-p' {...props} />,

          ul: props => <ul className='markdown-ul' {...props} />,

          ol: props => <ol className='markdown-ol' {...props} />,

          li: props => <li className='markdown-li' {...props} />,

          hr: props => <hr className='markdown-divider' {...props} />,

          blockquote: props => (
            <blockquote className='markdown-blockquote' {...props} />
          ),

          table: props => (
            <div className='markdown-table-wrapper'>
              <table className='markdown-table' {...props} />
            </div>
          ),

          thead: props => <thead className='markdown-thead' {...props} />,

          tbody: props => <tbody className='markdown-tbody' {...props} />,

          tr: props => <tr className='markdown-tr' {...props} />,

          th: props => <th className='markdown-th' {...props} />,

          td: props => <td className='markdown-td' {...props} />,

          img: ({ alt, ...props }) => (
            <figure className='markdown-figure'>
              <img className='markdown-image' alt={alt} {...props} />

              {alt && (
                <figcaption className='markdown-caption'>{alt}</figcaption>
              )}
            </figure>
          ),

          a ({ href = '', children }) {
            if (href.startsWith('http://') || href.startsWith('https://')) {
              return (
                <a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='markdown-link'
                >
                  {children}
                </a>
              )
            }

            if (href.startsWith('#')) {
              return (
                <a href={href} className='markdown-link'>
                  {children}
                </a>
              )
            }

            if (href.endsWith('.md')) {
              return (
                <Link to={resolveInternalLink(href)} className='markdown-link'>
                  {children}
                </Link>
              )
            }

            return (
              <Link to={href} className='markdown-link'>
                {children}
              </Link>
            )
          },

          code ({ className, children, ...props }) {
            const inline = !className

            if (inline) {
              return (
                <code className='markdown-inline-code' {...props}>
                  {children}
                </code>
              )
            }

            return (
              <pre className='markdown-code-block'>
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            )
          }
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  )
}
