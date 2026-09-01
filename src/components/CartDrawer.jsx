import { useEffect, useState } from 'react'
import { luaDeMel, rsvp, casal, formatBRL, asset } from '../config'

export default function CartDrawer({ open, onClose, items, total, remove }) {
  const [copied, setCopied] = useState('')
  const { pix } = luaDeMel
  const [qrOk, setQrOk] = useState(true)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  const copiar = async (texto, marca) => {
    try {
      await navigator.clipboard.writeText(texto)
    } catch {
      const el = document.createElement('textarea')
      el.value = texto
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      el.remove()
    }
    setCopied(marca)
    setTimeout(() => setCopied(''), 2600)
  }

  const mensagemWhats = () => {
    const linhas = items.map(
      (i) => `• ${i.nome}${i.qty > 1 ? ` (${i.qty}x)` : ''}: ${formatBRL(i.preco * i.qty)}`
    )
    return encodeURIComponent(
      `Oi! Acabei de enviar o PIX do presente de casamento de vocês 💛\n\n` +
        `${linhas.join('\n')}\n\nTotal: ${formatBRL(total)}\n\nUm beijo e parabéns!`
    )
  }

  return (
    <>
      <div
        className={`drawer-scrim ${open ? 'is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`drawer ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Presentes escolhidos"
      >
        <div className="drawer-head">
          <h3>Seus presentes</h3>
          <button className="drawer-close" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>

        <div className="drawer-body">
          {items.length === 0 ? (
            <p className="drawer-empty">
              Nada escolhido ainda.
              <br />
              Dê uma olhada nas experiências do Capítulo II.
            </p>
          ) : (
            items.map((i) => (
              <div className="cart-item" key={i.id}>
                <p>
                  {i.nome}
                  <small>
                    {i.qty > 1 ? `${i.qty} × ${formatBRL(i.preco)} = ` : ''}
                    {formatBRL(i.preco * i.qty)}
                  </small>
                </p>
                <button onClick={() => remove(i.id, true)}>Remover</button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="drawer-foot">
            <div className="drawer-total">
              <span>Total</span>
              <b>{formatBRL(total)}</b>
            </div>

            <div className="pix-box">
              <dl>
                <div>
                  <dt>Chave PIX ({pix.tipo})</dt>
                  <dd>{pix.chave}</dd>
                </div>
                <div>
                  <dt>Favorecido</dt>
                  <dd>{pix.favorecido}</dd>
                </div>
                <div>
                  <dt>Banco</dt>
                  <dd>{pix.banco}</dd>
                </div>
              </dl>
              {pix.qrcode && qrOk && (
                <img
                  className="pix-qr"
                  src={asset(pix.qrcode)}
                  alt="QR Code do PIX"
                  onError={() => setQrOk(false)}
                />
              )}
            </div>

            <div className="drawer-actions">
              <button
                className="btn btn-solid btn-block"
                onClick={() => copiar(pix.chave, 'pix')}
              >
                {copied === 'pix' ? 'Chave copiada ✓' : 'Copiar chave PIX'}
              </button>
              <a
                className="btn btn-ghost btn-block"
                href={`https://wa.me/${rsvp.whatsapp}?text=${mensagemWhats()}`}
                target="_blank"
                rel="noreferrer"
              >
                Avisar {casal.noiva.split(' ')[0]} e {casal.noivo.split(' ')[0]}
              </a>
            </div>

            <p className="copied">
              Faça o PIX no valor total e nos avise pelo WhatsApp, assim sabemos quem presenteou.
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
