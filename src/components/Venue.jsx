import { local, dataFormatada, fotoLocal } from '../config'
import { Photo, Reveal } from './ui'

export default function Venue() {
  return (
    <section id="local">
      <div className="wrap">
        <div className="split flip">
          <Reveal className="split-photo venue-photo">
            <Photo
              src={fotoLocal}
              alt={local.nome}
              label="Foto do local: public/img/local.jpg"
            />
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow-sm">Onde e quando</p>
            <h2 className="eyebrow">{local.titulo}</h2>
            <div className="lead">
              <p>{local.texto}</p>
            </div>

            <dl className="venue-card">
              <div className="venue-line">
                <dt>Data</dt>
                <dd>
                  {dataFormatada.longa}, às {dataFormatada.hora}
                </dd>
              </div>
              <div className="venue-line">
                <dt>Local</dt>
                <dd>
                  {local.nome}
                  <br />
                  {local.endereco}
                </dd>
              </div>
              <div className="venue-line">
                <dt>Obs.</dt>
                <dd>{local.observacao}</dd>
              </div>
            </dl>

            {local.mapa && (
              <a
                className="btn btn-ghost"
                href={local.mapa}
                target="_blank"
                rel="noreferrer"
                style={{ marginTop: 26 }}
              >
                Ver no mapa
              </a>
            )}
          </Reveal>
        </div>

        <Reveal delay={80}>
          <iframe
            className="venue-map"
            title="Mapa até o Villa Vezzane"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${local.nome} ${local.endereco}`)}&output=embed`}
          />
        </Reveal>

        <div className="info-grid">
          <Reveal className="info-card">
            <h4>Hospedagem</h4>
            <p>{local.hospedagem}</p>
          </Reveal>
          <Reveal className="info-card" delay={100}>
            <h4>Estacionamento</h4>
            <p>{local.estacionamento}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
