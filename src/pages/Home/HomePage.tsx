import Hero from '../../components/shared/Hero'
import Statistics from '../../components/shared/Statistics'
import AtaGlance from '../../components/shared/AtaGlance'
import ReadyToTry from '../../components/shared/ReadyToTry'
import PageTransition from '../../components/layout/PageTransition'

export default function HomePage () {
  return (
    <PageTransition>
      <main className='page-stack'>
        <Hero />
        <AtaGlance />
        <Statistics />
        <ReadyToTry />
      </main>
    </PageTransition>
  )
}
