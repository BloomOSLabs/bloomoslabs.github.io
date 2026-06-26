import {
  DocumentationHero,
  DocumentationCategories,
  FeaturedGuides,
  DocumentationCTA
} from '../../components/shared/Documentation'

export default function DocumentationPage () {
  return (
    <main className='page-stack'>
      <DocumentationHero />
      <DocumentationCategories />
      <FeaturedGuides />
      <DocumentationCTA />
    </main>
  )
}
