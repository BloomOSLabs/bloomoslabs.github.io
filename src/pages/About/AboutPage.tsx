import PageTransition from '../../components/layout/PageTransition'
import { AboutHero, Roadmap } from '../../components/shared/About'
import Mission from '../../components/shared/About/Mission'
import Principles from '../../components/shared/About/Principles'

export default function AboutPage () {
  return (
    <PageTransition>
      <AboutHero />
      <Mission />
      <Principles />
      <Roadmap />
    </PageTransition>
  )
}
