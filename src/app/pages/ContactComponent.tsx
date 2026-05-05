'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, GitBranch, Link, CalendarDays } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'
import emailjs from "@emailjs/browser"
// import Cal, { getCalApi } from "@calcom/embed-react"

type FormData = {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

const contacts = [
  { label: 'Email', value: 'Gurpinders1511@gmail.com', icon: <Mail size={14} className='text-primary' /> },
  { label: 'GitHub', value: 'github.com/Gurpinder009', icon: <GitBranch size={14} className='text-primary' /> },
  { label: 'LinkedIn', value: 'linkedin.com/in/gurpindersingh009', icon: <Link size={14} className='text-primary' /> },
]

const inputClass = 'border border-primary/15 bg-primary-bg border-l-2 border-l-primary rounded-r-sm px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/40 transition-all duration-300'

export default function ContactComponent() {
  const [isSending, setIsSending] = useState(false)
  const [activeTab, setActiveTab] = useState<'message' | 'book'>('message')

  const titleRef = useScrollAnimation()
  const { ref: leftRef, inView: leftInView } = useInView()
  const { ref: rightRef, inView: rightInView } = useInView<HTMLFormElement>()

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

 

  const onSubmit = async (data: FormData) => {
    if (!rightRef.current) return
    setIsSending(true)
    try {
      await emailjs.sendForm('service_7dhinyp', 'template_simple1', rightRef.current, 't_khGzsuugRJ2lw3m')
      alert("Message sent! I'll get back to you soon.")
      reset()
    } catch (error) {
      console.error('Email Error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className='min-h-screen px-6 md:px-15 lg:px-45 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden'>

      <div className='absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2'>Reach out</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Contact <span className='text-primary'>Me</span>
        </h2>
        <p className='text-sm text-gray-400 mb-12 max-w-xl'>
          Have a project in mind? Send a message or book a meeting directly in my calendar.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        {/* Left — map + contacts */}
        <div
          ref={leftRef}
          className='flex flex-col gap-5'
          style={{
            opacity: leftInView ? 1 : 0,
            transform: leftInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className='rounded-r-xl overflow-hidden border-l-2 border-l-primary h-64 grayscale hover:grayscale-0 transition-all duration-500'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.959445088253!2d-122.82371442386165!3d49.16396017137521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9e4b24a853b%3A0x87bba2256d9df31!2s14485%2088a%20Ave%2C%20Surrey%2C%20BC%20V3R%201A2!5e1!3m2!1sen!2sca!4v1704005800556!5m2!1sen!2sca"
              width="100%" height="100%" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className='bg-primary-bg border-l-2 border-l-primary rounded-r-xl p-5 flex flex-col gap-4'>
            {contacts.map((c, i) => (
              <div key={c.label}>
                <div className='flex items-center gap-3 group'>
                  <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors'>
                    {c.icon}
                  </div>
                  <div>
                    <p className='text-xs text-gray-500 uppercase tracking-wide'>{c.label}</p>
                    <p className='text-sm text-slate-300'>{c.value}</p>
                  </div>
                </div>
                {i < contacts.length - 1 && <hr className='border-primary/10 mt-4' />}
              </div>
            ))}
          </div>
        </div>

        {/* Right — tabs */}
        <div
          className='flex flex-col gap-4'
          style={{
            opacity: rightInView ? 1 : 0,
            transform: rightInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
          }}
        >
          {/* tab switcher */}
          <div className='flex gap-2'>
            <button
              onClick={() => setActiveTab('message')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300 ${activeTab === 'message'
                  ? 'bg-primary text-primary-bg border-primary'
                  : 'border-primary/20 text-gray-400 hover:border-primary/40'
                }`}
            >
              Send Message
            </button>
            <button
              onClick={() => setActiveTab('book')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-300 ${activeTab === 'book'
                  ? 'bg-primary text-primary-bg border-primary'
                  : 'border-primary/20 text-gray-400 hover:border-primary/40'
                }`}
            >
              <CalendarDays size={12} /> Book a Meeting
            </button>
          </div>

          {/* message form */}
          {activeTab === 'message' && (
            <form
              ref={rightRef}
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col gap-4'
              autoComplete='off'
            >
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs text-gray-400 uppercase tracking-wide'>First Name</label>
                  <input {...register('firstName', { required: 'Required' })} placeholder='Gurpinder' className={inputClass} />
                  {errors.firstName && <p className='text-[10px] text-red-400'>{errors.firstName.message}</p>}
                </div>
                <div className='flex flex-col gap-1.5'>
                  <label className='text-xs text-gray-400 uppercase tracking-wide'>Last Name</label>
                  <input {...register('lastName', { required: 'Required' })} placeholder='Grewal' className={inputClass} />
                  {errors.lastName && <p className='text-[10px] text-red-400'>{errors.lastName.message}</p>}
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs text-gray-400 uppercase tracking-wide'>Email</label>
                <input
                  {...register('email', { required: 'Required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                  placeholder='you@example.com'
                  className={inputClass}
                />
                {errors.email && <p className='text-[10px] text-red-400'>{errors.email.message}</p>}
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs text-gray-400 uppercase tracking-wide'>Subject</label>
                <input {...register('subject', { required: 'Required' })} placeholder="Let's work together" className={inputClass} />
                {errors.subject && <p className='text-[10px] text-red-400'>{errors.subject.message}</p>}
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-xs text-gray-400 uppercase tracking-wide'>Message</label>
                <textarea
                  {...register('message', { required: 'Required' })}
                  placeholder='Tell me about your project...'
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className='text-[10px] text-red-400'>{errors.message.message}</p>}
              </div>

              <button
                type='submit'
                disabled={isSending}
                className='w-fit px-6 py-2.5 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-bg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSending ? 'Sending...' : 'Send Message →'}
              </button>
            </form>
          )}
          {activeTab === 'book' && (
            <div className='border-l-2 border-l-primary rounded-r-xl p-6 flex flex-col gap-4'>
              <p className='text-sm text-gray-400 leading-relaxed'>
                Pick a time that works for you — a <span className='text-primary font-medium'>Google Meet link</span> will be automatically generated and sent to your email.
              </p>

              <ul className='flex flex-col gap-2'>
                {['30-minute intro call', 'Automatic Google Meet link', 'Confirmation email sent instantly', 'Synced to my calendar'].map(f => (
                  <li key={f} className='flex items-center gap-2 text-xs text-gray-400'>
                    <span className='w-1.5 h-1.5 rounded-full bg-primary inline-block' />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendar.app.google/NFbpAWEhRAhF5QnK7"
                target="_blank"
                rel="noopener noreferrer"
                className='w-fit flex items-center gap-2 px-6 py-2.5 border border-primary text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-bg transition-all duration-300'
              >
                <CalendarDays size={14} /> Book a Meeting ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}