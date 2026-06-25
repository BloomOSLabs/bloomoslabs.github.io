import Hero from '../../components/shared/Hero'
import Statistics from '../../components/shared/Statistics'
import WhyBloomOS from '../../components/shared/WhyBloomOS'

export default function HomePage () {
  return (
    <main className='page-background page-stack'>
      <Hero />
      <WhyBloomOS />
      <Statistics />
    </main>
  )
}
