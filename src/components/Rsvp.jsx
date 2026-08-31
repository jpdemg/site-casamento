import { useRef, useState } from 'react'
import { rsvp } from '../config'
import { Reveal } from './ui'

const CONFIGURADO = !rsvp.formId.includes('SEU_FORM_ID')
const ACTION = `https://docs.google.com/forms/d/e/${rsvp.formId}/formResponse`

/**
 * Formulário com a cara do site que envia direto para o Google Forms.
 * O POST vai num iframe escondido — é o que permite gravar na planilha sem
 * backend e sem tirar o convidado do site.
 */
function FormNativo() {
  const [estado, setEstado] = useState('parado') // parado | enviando | ok
  const [criancaVai, setCriancaVai] = useState(null) // null | 'sim' | 'nao'
  const enviando = useRef(false)
  const formRef = useRef(null)

  return (
    <>
      <form
        ref={formRef}
        className="rsvp-form"
        action={ACTION}
        method="POST"
        target="rsvp-sink"
        onSubmit={() => {
          enviando.current = true
          setEstado('enviando')
        }}
      >
        <label className="field">
          <span>Nome completo</span>
          <input
            type="text"
            name={rsvp.campos.nome}
            placeholder="Digite aqui o seu nome"
            autoComplete="name"
            required
          />
        </label>

        <label className="field">
          <span>WhatsApp</span>
          <input
            type="tel"
            name={rsvp.campos.whatsapp}
            placeholder="(11) 99999-9999"
            autoComplete="tel"
            required
          />
        </label>

        <fieldset className="field field-radio">
          <legend>Alguma criança irá com você?</legend>
          <label className="radio">
            <input
              type="radio"
              name={rsvp.campos.criancaVai}
              value={rsvp.opcoesCrianca.sim}
              onChange={() => setCriancaVai('sim')}
              required
            />
            <span>{rsvp.opcoesCrianca.sim}</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name={rsvp.campos.criancaVai}
              value={rsvp.opcoesCrianca.nao}
              onChange={() => setCriancaVai('nao')}
              required
            />
            <span>{rsvp.opcoesCrianca.nao}</span>
          </label>
        </fieldset>

        {criancaVai === 'sim' && (
          <>
            <label className="field">
              <span>Nome da criança</span>
              <input type="text" name={rsvp.campos.criancaNome} placeholder="Nome da criança" />
            </label>
            <label className="field">
              <span>Idade da criança</span>
              <input type="text" name={rsvp.campos.criancaIdade} placeholder="Idade" required />
            </label>
          </>
        )}

        <fieldset className="field field-radio">
          <legend>Você irá comparecer?</legend>
          <label className="radio">
            <input
              type="radio"
              name={rsvp.campos.presenca}
              value={rsvp.opcoesPresenca.sim}
              required
            />
            <span>{rsvp.opcoesPresenca.sim}</span>
          </label>
          <label className="radio">
            <input
              type="radio"
              name={rsvp.campos.presenca}
              value={rsvp.opcoesPresenca.nao}
            />
            <span>{rsvp.opcoesPresenca.nao}</span>
          </label>
        </fieldset>

        <button className="btn btn-solid btn-block" type="submit" disabled={estado === 'enviando'}>
          {estado === 'enviando' ? 'Enviando…' : 'Enviar'}
        </button>
      </form>

      {/* recebe a resposta do Google sem navegar a página */}
      <iframe
        name="rsvp-sink"
        title="envio"
        className="rsvp-sink"
        onLoad={() => {
          if (enviando.current) {
            enviando.current = false
            setEstado('ok')
          }
        }}
      />

      {estado === 'ok' && (
        <div className="rsvp-ok" role="status">
          <p className="eyebrow-sm">{rsvp.sucesso.titulo}</p>
          <p>{rsvp.sucesso.texto}</p>
          <button
            className="btn btn-ghost"
            onClick={() => {
              formRef.current?.reset()
              setCriancaVai(null)
              setEstado('parado')
            }}
            type="button"
          >
            Confirmar outra pessoa
          </button>
        </div>
      )}
    </>
  )
}

function FormIframe() {
  return (
    <iframe
      src={rsvp.formEmbedUrl}
      title="Formulário de confirmação de presença"
      loading="lazy"
      className="rsvp-embed"
    >
      Carregando…
    </iframe>
  )
}

function AvisoSetup() {
  return (
    <div className="form-fallback">
      <p className="eyebrow-sm">Formulário ainda não conectado</p>
      <p>
        Falta colar o <b>ID do formulário</b> e os <b>IDs dos campos</b> em{' '}
        <code>src/config.js</code>. O passo a passo (com o truque do link
        pré-preenchido) está na seção <b>“Confirmação de presença”</b> do{' '}
        <code>README.md</code>.
      </p>
      <p style={{ fontSize: '0.9rem' }}>
        Nenhum convidado vê este aviso depois que os IDs estiverem preenchidos.
      </p>
    </div>
  )
}

export default function Rsvp() {
  const modoIframe = rsvp.modo === 'iframe'
  const pronto = modoIframe ? !rsvp.formEmbedUrl.includes('SEU_FORM_ID') : CONFIGURADO

  return (
    <section id="presenca" className="section-alt">
      <div className="wrap">
        <div className="rsvp">
          <Reveal>
            <h2 className="eyebrow">{rsvp.titulo}</h2>
            <div className="lead">
              <p>
                {rsvp.texto} <b>{rsvp.prazo}</b>.
              </p>
              <p>{rsvp.aviso}</p>
            </div>
            <p className="rsvp-deadline">
              Alguma dúvida? Fale com a gente no{' '}
              <a
                href={`https://wa.me/${rsvp.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--olive)' }}
              >
                WhatsApp
              </a>
              .
            </p>
          </Reveal>

          <Reveal className="form-shell" delay={120}>
            {!pronto ? <AvisoSetup /> : modoIframe ? <FormIframe /> : <FormNativo />}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
