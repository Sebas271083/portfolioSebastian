import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolio';
import { SectionTitle, CTAButton } from '../ui';

// ─── Zod schema ────────────────────────────────────────────────
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(80, 'El nombre es demasiado largo')
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, 'El nombre solo puede contener letras'),
  email: z
    .string()
    .email('Ingresá un email válido')
    .max(150, 'El email es demasiado largo'),
  subject: z
    .string()
    .min(5, 'El asunto debe tener al menos 5 caracteres')
    .max(120, 'El asunto es demasiado largo'),
  message: z
    .string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .max(2000, 'El mensaje no puede superar los 2000 caracteres'),
});

// ─── EmailJS config — REEMPLAZAR CON TUS KEYS ──────────────────
// Para configurar EmailJS:
// 1. Crear cuenta en https://emailjs.com
// 2. Agregar un servicio de email
// 3. Crear una plantilla con variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Reemplazar los valores de abajo
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',       // ← reemplazar
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',     // ← reemplazar
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',       // ← reemplazar
};

async function sendEmailJS(data) {
  const payload = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: EMAILJS_CONFIG.TEMPLATE_ID,
    user_id: EMAILJS_CONFIG.PUBLIC_KEY,
    template_params: {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      reply_to: data.email,
    },
  };

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Error al enviar el mensaje');
  }
  return true;
}

// ─── FormField ─────────────────────────────────────────────────
function FormField({ label, id, error, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2"
      >
        {label} <span className="text-accent-primary" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 mt-1.5 text-xs text-red-400"
          role="alert"
        >
          <AlertCircle size={10} aria-hidden="true" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

const inputClass = `w-full bg-bg-elevated border border-bg-border rounded-lg px-4 py-3 text-sm text-text-primary 
  placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 
  transition-all duration-200 font-body`;

// ─── Main Component ────────────────────────────────────────────
export default function ContactSection() {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const messageValue = watch('message', '');

  const onSubmit = async (data) => {
    setStatus('loading');
    setErrorMsg('');
    try {
      await sendEmailJS(data);
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg('No se pudo enviar el mensaje. Intentá de nuevo o escribime directamente por email.');
      console.error('Contact form error:', err.message);
    }
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/alexrivera', href: PERSONAL_INFO.linkedin },
    { icon: Github, label: 'GitHub', value: 'github.com/alexrivera', href: PERSONAL_INFO.github },
  ];

  return (
    <section id="contact" className="section-padding relative" aria-label="Contacto">
      {/* bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,168,71,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionTitle
          label="Contacto"
          title="¿Tenés un proyecto o una oportunidad?"
          subtitle="Estoy disponible para posiciones full-time, freelance o consultoría. Respondeo dentro de las 24hs."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left: Social + info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="card-surface p-6 space-y-5">
              <div>
                <h3 className="font-display font-semibold text-text-primary mb-1 text-sm">
                  Canales de contacto
                </h3>
                <p className="text-text-muted text-xs leading-relaxed">
                  Preferí LinkedIn para oportunidades laborales y email para proyectos.
                </p>
              </div>

              <div className="space-y-3" role="list">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-elevated border border-transparent hover:border-bg-border transition-all duration-200 group focus-ring"
                    role="listitem"
                  >
                    <div className="w-8 h-8 rounded-lg bg-accent-glow border border-accent-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-accent-primary/40 transition-all">
                      <link.icon size={14} className="text-accent-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-mono uppercase tracking-wider">{link.label}</p>
                      <p className="text-text-secondary text-xs group-hover:text-text-primary transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="card-surface p-5 border-accent-primary/20" style={{ background: 'rgba(212,168,71,0.04)' }}>
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-accent-primary mt-1 animate-pulse flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-text-primary text-sm font-medium mb-1">Disponible ahora</p>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Abierto a posiciones full-time, part-time y proyectos freelance. Ubicación: Argentina (remoto disponible).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-surface p-6 md:p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-glow border border-accent-primary/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-accent-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-xl mb-2">
                      ¡Mensaje enviado!
                    </h3>
                    <p className="text-text-secondary text-sm max-w-sm">
                      Gracias por escribirme. Te respondo dentro de las próximas 24hs.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-mono text-text-muted hover:text-accent-primary transition-colors focus-ring rounded"
                  >
                    Enviar otro mensaje →
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                  aria-label="Formulario de contacto"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Nombre" id="name" error={errors.name?.message}>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Tu nombre"
                        className={inputClass}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        {...register('name')}
                      />
                    </FormField>

                    <FormField label="Email" id="email" error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="tu@email.com"
                        className={inputClass}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        {...register('email')}
                      />
                    </FormField>
                  </div>

                  <FormField label="Asunto" id="subject" error={errors.subject?.message}>
                    <input
                      id="subject"
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className={inputClass}
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      {...register('subject')}
                    />
                  </FormField>

                  <FormField label="Mensaje" id="message" error={errors.message?.message}>
                    <div className="relative">
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Contame sobre tu proyecto o consulta..."
                        className={`${inputClass} resize-none`}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        {...register('message')}
                      />
                      <span className="absolute bottom-2 right-3 text-[10px] font-mono text-text-muted" aria-live="polite">
                        {messageValue.length}/2000
                      </span>
                    </div>
                  </FormField>

                  {/* Global error */}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs"
                      role="alert"
                    >
                      <AlertCircle size={14} className="flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{errorMsg}</span>
                    </motion.div>
                  )}

                  <CTAButton
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    disabled={status === 'loading'}
                    type="submit"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Enviar mensaje
                      </>
                    )}
                  </CTAButton>

                  <p className="text-[11px] text-text-muted text-center leading-relaxed">
                    Tu información se usa exclusivamente para responder tu consulta.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
