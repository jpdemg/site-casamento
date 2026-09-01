import { dressCode } from '../config'
import { Photo, Reveal } from './ui'

export default function DressCode() {
  return (
    <section id="dresscode" className="section-alt">
      <div className="wrap">
        <Reveal>
          <h2 className="eyebrow center">{dressCode.titulo}</h2>
          <hr className="rule" />
        </Reveal>

        <div className="dress" style={{ marginTop: 44 }}>
          <Reveal>
            <div className="dress-collage">
              <span className="swatch swatch-a" aria-hidden="true" />
              <span className="swatch swatch-b" aria-hidden="true" />
              {dressCode.fotos.map((f, i) => (
                <Photo
                  key={i}
                  src={f.src}
                  alt={f.alt}
                  label={`Referência ${i + 1}: public/img/dresscode-${i + 1}.jpg`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lead">
              {dressCode.paragrafos.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {dressCode.pinterest && (
              <a
                className="btn btn-ghost btn-block"
                href={dressCode.pinterest}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 28 }}
              >
                Inspire-se
              </a>
            )}

            <p className="dress-note">{dressCode.paletaNota}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
