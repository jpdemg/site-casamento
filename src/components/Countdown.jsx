import { useEffect, useState } from 'react'
import { contagem, dataCasamento } from '../config'
import { Reveal } from './ui'

function diff(target) {
  const ms = Math.max(0, target.getTime() - Date.now())
  return {
    dias: Math.floor(ms / 86400000),
    horas: Math.floor((ms / 3600000) % 24),
    minutos: Math.floor((ms / 60000) % 60),
    segundos: Math.floor((ms / 1000) % 60),
    acabou: ms === 0,
  }
}

export default function Countdown() {
  const [t, setT] = useState(() => diff(dataCasamento))

  useEffect(() => {
    const id = setInterval(() => setT(diff(dataCasamento)), 1000)
    return () => clearInterval(id)
  }, [])

  const cells = [
    ['Dias', t.dias],
    ['Horas', t.horas],
    ['Minutos', t.minutos],
    ['Segundos', t.segundos],
  ]

  return (
    <section id="contagem" className="count">
      <div className="wrap narrow">
        <Reveal>
          <h2 className="eyebrow">{contagem.titulo}</h2>
          <p className="lead">{contagem.texto}</p>
        </Reveal>

        <Reveal delay={120}>
          {t.acabou ? (
            <p className="count-foot" style={{ marginTop: 46 }}>
              Hoje é o dia. <b>Nos vemos lá.</b>
            </p>
          ) : (
            <>
              <div className="count-grid">
                {cells.map(([label, value]) => (
                  <div className="count-cell" key={label}>
                    <span className="count-num">{String(value).padStart(2, '0')}</span>
                    <span className="count-lab">{label}</span>
                  </div>
                ))}
              </div>
              <p className="count-foot">{contagem.rodape}</p>
            </>
          )}
        </Reveal>
      </div>
    </section>
  )
}
