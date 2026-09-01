import { casal, dataFormatada, fotoHero, asset } from '../config'

export default function Hero() {
  return (
    <header className="hero">
      <img
        className="hero-bg"
        src={asset(fotoHero)}
        alt={`${casal.noiva} e ${casal.noivo}`}
      />

      <div className="hero-overlay" />

      <div className="hero-inner">
        <h1 className="hero-names">
          {casal.noiva} <span>e</span> {casal.noivo}
        </h1>
        <p className="hero-date">{dataFormatada.curta}</p>
      </div>

      <p className="hero-scroll">Role para descer</p>
    </header>
  )
}
