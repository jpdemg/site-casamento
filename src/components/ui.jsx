import { useEffect, useRef, useState } from 'react'
import { asset, casal } from '../config'

/**
 * Selo com o monograma. Usa a imagem do convite; se ela não carregar, cai nas
 * iniciais em texto. Com `bare`, mostra só o monograma, sem o círculo.
 */
export function Seal({ size = 66, bare = false, className = '', style }) {
  const [imgOk, setImgOk] = useState(Boolean(casal.monogramaImg))

  return (
    <div
      className={`seal ${bare ? 'seal-bare' : ''} ${className}`}
      style={{ width: size, height: size, ...style }}
      aria-label={`${casal.noiva} e ${casal.noivo}`}
    >
      {imgOk ? (
        <img
          className="seal-img"
          src={asset(casal.monogramaImg)}
          alt=""
          onError={() => setImgOk(false)}
        />
      ) : (
        casal.monograma
      )}
    </div>
  )
}

/**
 * Imagem com fallback: se o arquivo não existir ainda (placeholder da config),
 * mantém o bloco decorativo com o rótulo do que deve entrar ali.
 */
export function Photo({ src, alt = '', label = 'Sua foto aqui', className = '', style }) {
  const [ok, setOk] = useState(Boolean(src))
  const mostraImg = ok && src

  return (
    <div className={`ph ${className}`} data-label={mostraImg ? undefined : label} style={style}>
      {mostraImg ? (
        <img src={asset(src)} alt={alt} loading="lazy" onError={() => setOk(false)} />
      ) : null}
    </div>
  )
}

/** Revela o conteúdo com um fade suave quando entra na tela. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
