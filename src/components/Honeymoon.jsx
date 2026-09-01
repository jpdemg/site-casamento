import { useState } from 'react'
import { luaDeMel, formatBRL } from '../config'
import { Photo, Reveal } from './ui'

const SUGESTOES = [50, 100, 250, 500]

export default function Honeymoon({ cart, add, remove, addFree, onOpenCart }) {
  const [valorLivre, setValorLivre] = useState('')

  const enviarLivre = () => {
    const n = Number(String(valorLivre).replace(/[^\d,.-]/g, '').replace(',', '.'))
    if (!n || n <= 0) return
    addFree(n)
    setValorLivre('')
    onOpenCart()
  }

  return (
    <section id="luademel">
      <div className="wrap">
        <Reveal>
          <h2 className="chapter-title">
            <small>Lua de mel</small>
            {luaDeMel.titulo}
          </h2>
          <hr className="rule" />
          <div className="lead narrow center" style={{ marginTop: 30 }}>
            {luaDeMel.paragrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <p
            className="eyebrow-sm center"
            style={{ marginTop: 40, marginBottom: 0, color: 'var(--ink)' }}
          >
            {luaDeMel.chamada}
          </p>
        </Reveal>

        <div className="gifts">
          {luaDeMel.cotas.map((c, i) => {
            const qty = cart[c.id]?.qty ?? 0
            return (
              <Reveal key={c.id} delay={Math.min(i, 5) * 60} className={`gift ${qty ? 'is-picked' : ''}`}>
                {c.img && <Photo src={c.img} alt={c.nome} label={`Imagem: ${c.img}`} />}
                <div className="gift-body">
                  <p className="gift-name">{c.nome}</p>
                  <div className="gift-foot">
                    <span className="gift-price">{formatBRL(c.preco)}</span>
                    {qty > 0 ? (
                      <span className="gift-qty">
                        <button
                          className="gift-add"
                          onClick={() => remove(c.id)}
                          aria-label={`Remover ${c.nome}`}
                        >
                          −
                        </button>
                        <span>{qty}</span>
                        <button
                          className="gift-add"
                          onClick={() => add(c)}
                          aria-label={`Adicionar mais ${c.nome}`}
                        >
                          +
                        </button>
                      </span>
                    ) : (
                      <button
                        className="gift-add"
                        onClick={() => add(c)}
                        aria-label={`Adicionar ${c.nome}`}
                      >
                        +
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="free-gift">
          <h4>Ou contribua com o valor que quiser</h4>
          <p>
            Se preferir não escolher uma experiência específica, qualquer valor é bem-vindo. Ele
            entra direto no caixa da viagem e a gente decide juntos onde ele vira memória.
          </p>
          <div className="free-row">
            {SUGESTOES.map((v) => (
              <button
                key={v}
                className={`free-chip ${Number(valorLivre) === v ? 'is-on' : ''}`}
                onClick={() => setValorLivre(String(v))}
              >
                {formatBRL(v)}
              </button>
            ))}
            <span className="free-input">
              <span>R$</span>
              <input
                type="text"
                inputMode="decimal"
                placeholder="outro"
                value={valorLivre}
                onChange={(e) => setValorLivre(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && enviarLivre()}
                aria-label="Valor livre da contribuição"
              />
            </span>
            <button className="btn btn-solid" onClick={enviarLivre}>
              Adicionar
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
