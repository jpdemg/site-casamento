import { momento, asset } from '../config'
import { Reveal } from './ui'

export default function Moment() {
  if (!momento?.video) return null

  return (
    <section id="momento" className="moment-section">
      <div className="wrap narrow">
        <Reveal className="moment-frame">
          <video
            className="moment-video"
            src={asset(momento.video)}
            poster={asset(momento.poster)}
            autoPlay
            loop
            muted
            playsInline
          />
        </Reveal>
        {momento.legenda && <p className="moment-caption">{momento.legenda}</p>}
      </div>
    </section>
  )
}
