import { useEffect, useState } from 'react'
import { formatBRL } from '../config'

const LINKS = [
  { href: '#contagem', label: 'Contagem' },
  { href: '#historia', label: 'Nós' },
  { href: '#local', label: 'O local' },
  { href: '#dresscode', label: 'Dress code' },
  { href: '#luademel', label: 'Lua de mel' },
  { href: '#presenca', label: 'Presença' },
]

export default function Nav({ count, total, onOpenCart }) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav ${stuck ? 'is-stuck' : ''}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>

      {count > 0 && (
        <button className="nav-cart" onClick={onOpenCart}>
          Presentes ({count}) <b>{formatBRL(total)}</b>
        </button>
      )}
    </>
  )
}
