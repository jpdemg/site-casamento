import { historia, fotoHistoria } from '../config'
import { Photo, Reveal } from './ui'

export default function Story() {
  return (
    <section id="historia" className="section-alt">
      <div className="wrap">
        <div className="split">
          <Reveal className="split-photo">
            <Photo
              src={fotoHistoria}
              alt="Nós dois"
              label="Foto do casal — public/img/historia.jpg"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow-sm">Capítulo I</p>
            <h2 className="eyebrow">{historia.titulo}</h2>

            {historia.versiculo && (
              <blockquote className="verse">
                {historia.versiculo}
                <cite>{historia.referencia}</cite>
              </blockquote>
            )}

            <div className="lead">
              {historia.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
