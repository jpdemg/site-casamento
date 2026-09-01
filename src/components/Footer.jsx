import { casal, dataFormatada, recado } from '../config'
import { Reveal, Seal } from './ui'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap narrow">
        <Reveal>
          <Seal bare size={116} style={{ margin: '0 auto' }} />
          <p className="foot-names">
            {casal.noiva} <span style={{ fontFamily: 'var(--serif)', fontSize: '0.5em' }}>e</span>{' '}
            {casal.noivo}
          </p>
          <p className="foot-date">{dataFormatada.curta}</p>
          {recado.texto && <p className="foot-msg">{recado.texto}</p>}
          {recado.formLink && (
            <a className="btn btn-ghost" href={recado.formLink} target="_blank" rel="noreferrer">
              Deixar um recado
            </a>
          )}
          <p className="foot-credit">Feito com amor</p>
        </Reveal>
      </div>
    </footer>
  )
}
