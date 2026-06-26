import Container from '../../layout/Container'
import Section from '../../layout/Section'
import SectionHeading from '../../layout/SectionHeading'

export default function Mission () {
  return (
    <Section>
      <Container className='section-grid'>
        <div className='section-inner'>
          <SectionHeading
            title='Our Mission'
            subtitle='Strengthening Android through privacy, security and open-source development.'
          />

          <div className='mission-grid'>
            <div className='mission-introduction'>
              <p className='mission-text'>
                BloomOS exists to build a privacy-focused Android operating
                system that is transparent, secure and dependable. Rather than
                modifying Android with unnecessary features, BloomOS focuses on
                strengthening the platform while preserving a clean and
                intuitive user experience.
              </p>

              <p className='mission-text'>
                Our long-term vision is to move as close as possible to the
                security and privacy standards demonstrated by projects such as
                GrapheneOS wherever the underlying hardware allows. When
                hardware limitations prevent identical implementations, BloomOS
                aims to provide the strongest practical protections available
                for each supported device.
              </p>
            </div>

            <div className='mission-points'>
              <div className='mission-point'>
                <span className='mission-number'>01</span>

                <div>
                  <h3 className='mission-title'>Privacy First</h3>

                  <p className='mission-description'>
                    Protect user data through sensible defaults, hardened
                    software and minimizing unnecessary data collection whenever
                    possible.
                  </p>
                </div>
              </div>

              <div className='mission-point'>
                <span className='mission-number'>02</span>

                <div>
                  <h3 className='mission-title'>Secure by Design</h3>

                  <p className='mission-description'>
                    Prioritize security throughout the operating system by
                    adopting proven hardening techniques and continuously
                    improving the platform as Android evolves.
                  </p>
                </div>
              </div>

              <div className='mission-point'>
                <span className='mission-number'>03</span>

                <div>
                  <h3 className='mission-title'>Open Source & Transparent</h3>

                  <p className='mission-description'>
                    Every improvement is developed openly so the community can
                    inspect, contribute, verify and help shape the future of
                    BloomOS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
