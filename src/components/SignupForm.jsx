'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PhoneField from './PhoneField.jsx'
import { COUNTRIES, PHONE_EXAMPLES, TIMEZONE_TO_ISO, DEFAULT_ISO } from '../data/content.js'
import { submitLead } from '../lib/submitLead.js'

const digits = (s) => String(s ?? '').replace(/[^\d+]/g, '')

// Format a raw phone string into a full international number (+<dial><national>).
function formatPhone(iso, raw) {
  const country = COUNTRIES.find((c) => c.iso === iso)
  const dial = country ? country.dial : 61
  let c = digits(raw)
  if (!c) return ''
  if (c.startsWith('+')) c = c.slice(1)
  const d = String(dial)
  if (c.startsWith(d) && c.length > d.length) c = c.slice(d.length)
  c = c.replace(/^0+(?=\d)/, '')
  return c ? `+${d}${c}` : ''
}

export default function SignupForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    iso: DEFAULT_ISO,
    phone: '',
    agree: true,
    // Honeypot: bots fill every field they find. People never reach it.
    company: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting
  const [serverError, setServerError] = useState('')
  const submittingRef = useRef(false)
  const mountedRef = useRef(true)

  const phoneExample = PHONE_EXAMPLES[form.iso] || '123 456 789'

  // Guard against state updates after the visitor has navigated away.
  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  // Detect the visitor's country from their timezone and pre-select the matching country code.
  useEffect(() => {
    let tz = ''
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { /* ignore */ }
    const iso = TIMEZONE_TO_ISO[tz]
    if (iso && iso !== DEFAULT_ISO) setForm((f) => ({ ...f, iso }))
  }, [])

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }))

  const setIso = (iso) => setForm((f) => ({ ...f, iso }))

  const validate = () => {
    const next = {}
    if (!form.firstName.trim()) next.firstName = 'Please enter your first name.'
    if (!form.lastName.trim()) next.lastName = 'Please enter your last name.'
    if (!form.email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) next.email = 'That email address doesn’t look right.'

    if (!form.phone.trim()) {
      next.phone = 'Please enter your phone number.'
    } else {
      const raw = form.phone.replace(/\D/g, '')
      if (raw.startsWith('0')) {
        next.phone = 'Please remove the leading 0. The country code is already selected beside the field.'
      } else if (raw.length < 6 || raw.length > 15) {
        next.phone = 'Please enter a phone number between 6 and 15 digits.'
      }
    }

    if (!form.agree) next.agree = 'Please accept the Privacy Policy and Terms & Conditions.'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // Belt-and-braces double-submit guard on top of the disabled button.
    if (submittingRef.current) return

    // Honeypot: a filled field means a bot. Do nothing and give it no signal.
    if (form.company.trim()) return

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length !== 0) return

    setStatus('submitting')
    setServerError('')
    submittingRef.current = true

    try {
      const result = await submitLead({
        email: form.email.trim(),
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        phone: formatPhone(form.iso, form.phone),
      })

      if (!mountedRef.current) return

      if (result.ok) {
        router.push('/thank-you')
        return
      }

      if (Object.keys(result.fieldErrors).length !== 0) {
        setErrors((prev) => ({ ...prev, ...result.fieldErrors }))
      }
      setServerError(result.message)
      setStatus('idle')
    } catch {
      if (mountedRef.current) {
        setServerError('Something went wrong. Please check your details and try again.')
        setStatus('idle')
      }
    } finally {
      submittingRef.current = false
    }
  }

  return (
    <div className="join__card">
      <div className="join__card-head">
        <h3 className="join__card-title">Create your account</h3>
        <span className="join__secure" role="img" aria-label="Secure sign up">
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m9 12 2 2 4-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Secure sign up
        </span>
      </div>
      <p className="join__card-sub">
        We only ask for basic contact details to begin. Fields marked{' '}
        <span className="req">*</span> are required.
      </p>

      <form className="join__form" onSubmit={onSubmit} noValidate>
        <div className="join__hp" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={update('company')}
          />
        </div>

        <div className="join__row">
          <div className="join__field">
            <label htmlFor="firstName">First Name <span className="req">*</span></label>
            <input
              id="firstName" name="firstName" type="text" placeholder="Jordan"
              autoComplete="given-name" maxLength={60} required
              value={form.firstName} onChange={update('firstName')}
              aria-invalid={!!errors.firstName}
            />
            {errors.firstName && <span className="join__error">{errors.firstName}</span>}
          </div>
          <div className="join__field">
            <label htmlFor="lastName">Last Name <span className="req">*</span></label>
            <input
              id="lastName" name="lastName" type="text" placeholder="Clarke"
              autoComplete="family-name" maxLength={60} required
              value={form.lastName} onChange={update('lastName')}
              aria-invalid={!!errors.lastName}
            />
            {errors.lastName && <span className="join__error">{errors.lastName}</span>}
          </div>
        </div>

        <div className="join__field">
          <label htmlFor="email">Email Address <span className="req">*</span></label>
          <input
            id="email" name="email" type="email" placeholder="you@example.com"
            autoComplete="email" maxLength={120} required
            value={form.email} onChange={update('email')}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className="join__error">{errors.email}</span>}
        </div>

        <div className="join__field">
          <label htmlFor="phone">Phone Number <span className="req">*</span></label>
          <PhoneField
            id="phone"
            name="phone"
            iso={form.iso}
            onIsoChange={setIso}
            value={form.phone}
            onChange={update('phone')}
            placeholder={phoneExample}
            invalid={!!errors.phone}
            required
          />
          {errors.phone && <span className="join__error">{errors.phone}</span>}
        </div>

        <label className="join__agree">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={form.agree}
            onChange={update('agree')}
            required
          />
          <span>
            I agree to the <Link href="/privacy">Privacy Policy</Link> and{' '}
            <Link href="/terms">Terms &amp; Conditions</Link>.
          </span>
        </label>
        {errors.agree && <span className="join__error">{errors.agree}</span>}

        {serverError && (
          <div className="join__server-error" role="alert">{serverError}</div>
        )}

        <button type="submit" disabled={status === 'submitting'} className="btn btn--primary join__submit">
          {status === 'submitting' ? 'Creating your account…' : 'Get Started'}
        </button>

        <p className="join__fine">
          By registering you confirm you are aged 18 or over. We never ask for credit card
          details or passwords during sign up.
        </p>
      </form>
    </div>
  )
}
