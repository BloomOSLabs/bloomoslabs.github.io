import { Navigate, useParams } from 'react-router-dom'

import { MarkdownPage } from '../../components/shared/Documentation'
import PageTransition from '../../components/layout/PageTransition'

const documentationPages = {
  installation: 'installation/README.md',
  building: 'building/README.md',
  bringup: 'maintainers/README.md',
  ota: 'maintainers/ota.md',
  contributing: 'contributing/README.md',
  faq: 'faq/README.md'
} as const

type DocumentationSection = keyof typeof documentationPages

export default function DocumentationContentPage () {
  const { section } = useParams()

  if (!section || !(section in documentationPages)) {
    return <Navigate to='/404' replace />
  }

  return (
    <PageTransition>
      <MarkdownPage
        path={documentationPages[section as DocumentationSection]}
      />
    </PageTransition>
  )
}
