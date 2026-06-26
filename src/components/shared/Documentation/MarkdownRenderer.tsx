import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown.css'

interface MarkdownRendererProps {
  children: string
}

export default function MarkdownRenderer ({ children }: MarkdownRendererProps) {
  return (
    <article className='markdown-content'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: props => <h1 className='markdown-h1' {...props} />,
          h2: props => <h2 className='markdown-h2' {...props} />,
          h3: props => <h3 className='markdown-h3' {...props} />,
          p: props => <p className='markdown-p' {...props} />,
          ul: props => <ul className='markdown-ul' {...props} />,
          ol: props => <ol className='markdown-ol' {...props} />,
          li: props => <li className='markdown-li' {...props} />,
          blockquote: props => (
            <blockquote className='markdown-blockquote' {...props} />
          ),
          code (props) {
            const { className, children, ...rest } = props
            const inline = !className

            if (inline) {
              return (
                <code className='markdown-inline-code' {...rest}>
                  {children}
                </code>
              )
            }

            return (
              <pre className='markdown-code-block'>
                <code className={className} {...rest}>
                  {children}
                </code>
              </pre>
            )
          },
          table: props => (
            <div className='markdown-table-wrapper'>
              <table className='markdown-table' {...props} />
            </div>
          ),
          a: props => (
            <a
              {...props}
              className='markdown-link'
              target='_blank'
              rel='noopener noreferrer'
            />
          ),
          img: props => <img className='markdown-image' {...props} />,
          hr: props => <hr className='markdown-divider' {...props} />
        }}
      >
        {children}
      </ReactMarkdown>
    </article>
  )
}
