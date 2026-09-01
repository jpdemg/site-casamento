import { useCallback, useEffect, useMemo, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Countdown from './components/Countdown'
import Story from './components/Story'
import Venue from './components/Venue'
import DressCode from './components/DressCode'
import Honeymoon from './components/Honeymoon'
import CartDrawer from './components/CartDrawer'
import Rsvp from './components/Rsvp'
import Footer from './components/Footer'
import { Seal } from './components/ui'

const STORAGE_KEY = 'presentes-casamento'

export default function App() {
  // { [id]: { id, nome, preco, qty } }
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {}
    } catch {
      return {}
    }
  })
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
    } catch {
      /* modo privado do navegador — segue sem persistir */
    }
  }, [cart])

  const add = useCallback((cota) => {
    setCart((c) => ({
      ...c,
      [cota.id]: {
        id: cota.id,
        nome: cota.nome,
        preco: cota.preco,
        qty: (c[cota.id]?.qty ?? 0) + 1,
      },
    }))
  }, [])

  const remove = useCallback((id, tudo = false) => {
    setCart((c) => {
      const item = c[id]
      if (!item) return c
      if (tudo || item.qty <= 1) {
        const { [id]: _, ...resto } = c
        return resto
      }
      return { ...c, [id]: { ...item, qty: item.qty - 1 } }
    })
  }, [])

  // Valor livre: soma numa única linha, sem virar quantidade
  const addFree = useCallback((valor) => {
    setCart((c) => {
      const atual = c.__livre?.preco ?? 0
      return {
        ...c,
        __livre: {
          id: '__livre',
          nome: 'Contribuição livre para a lua de mel',
          preco: atual + valor,
          qty: 1,
        },
      }
    })
  }, [])

  const items = useMemo(() => Object.values(cart), [cart])
  const total = useMemo(() => items.reduce((s, i) => s + i.preco * i.qty, 0), [items])
  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items])

  return (
    <>
      <Nav count={count} total={total} onOpenCart={() => setCartOpen(true)} />
      <div className="hero-wrap">
        <Hero />
        <Seal size={72} className="hero-seal" />
      </div>
      <Countdown />
      <Story />
      <Venue />
      <DressCode />
      <Honeymoon
        cart={cart}
        add={add}
        remove={remove}
        addFree={addFree}
        onOpenCart={() => setCartOpen(true)}
      />
      <Rsvp />
      <Footer />
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={items}
        total={total}
        remove={remove}
      />
    </>
  )
}
