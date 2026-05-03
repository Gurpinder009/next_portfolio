


'use client'
import { useForm } from 'react-hook-form'
import { Mail, GitBranch, Link } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'

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

const inputClass = ' border border-primary/15  bg-primary-bg/10 backdrop-blur-xs border-l border-l-primary rounded-r-sm  px-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary/40 transition-colors duration-300'

export default function ContactComponent() {
  const titleRef = useScrollAnimation()
  const { ref: leftRef, inView: leftInView } = useInView()
 const { ref: rightRef, inView: rightInView } = useInView<HTMLFormElement>()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <div className='min-h-screen px-6 md:px-15 lg:px-45 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden'>

      <div className='absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2'>Reach out</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Contact <span className='text-primary'>Me</span>
        </h2>
        <p className='text-sm text-gray-400 mb-12 max-w-xl'>
          Have a project in mind or just want to connect? My inbox is always open.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>

        {/* left */}
        <div
          ref={leftRef}
          className='flex flex-col gap-5'
          style={{
            opacity: leftInView ? 1 : 0,
            transform: leftInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <div className='rounded-xl overflow-hidden border-2 border-primary h-64'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2343.959445088253!2d-122.82371442386165!3d49.16396017137521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9e4b24a853b%3A0x87bba2256d9df31!2s14485%2088a%20Ave%2C%20Surrey%2C%20BC%20V3R%201A2!5e1!3m2!1sen!2sca!4v1704005800556!5m2!1sen!2sca"
              width="100%" height="100%" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className=' p-5 flex flex-col gap-4'>
            {contacts.map(c => (
              <div key={c.label} className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                  {c.icon}
                </div>
                <div>
                  <p className='text-xs text-gray-500 uppercase tracking-wide'>{c.label}</p>
                  <p className='text-sm text-slate-300'>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          ref={rightRef}
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
          style={{
            opacity: rightInView ? 1 : 0,
            transform: rightInView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
          }}
        >
          <div className='grid grid-cols-2 gap-3'>
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs text-gray-400 uppercase tracking-wide'>First Name</label>
              <input {...register('firstName', { required: true })} placeholder='Gurpinder' className={inputClass} />
              {errors.firstName && <p className='text-xs text-red-400'>Required</p>}
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs text-gray-400 uppercase tracking-wide'>Last Name</label>
              <input {...register('lastName', { required: true })} placeholder='Grewal' className={inputClass} />
              {errors.lastName && <p className='text-xs text-red-400'>Required</p>}
            </div>
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-xs text-gray-400 uppercase tracking-wide'>Email</label>
            <input {...register('email', { required: true })} placeholder='you@example.com' className={inputClass} />
            {errors.email && <p className='text-xs text-red-400'>Required</p>}
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-xs text-gray-400 uppercase tracking-wide'>Subject</label>
            <input {...register('subject', { required: true })} placeholder="Let's work together" className={inputClass} />
            {errors.subject && <p className='text-xs text-red-400'>Required</p>}
          </div>

          <div className='flex flex-col gap-1.5'>
            <label className='text-xs text-gray-400 uppercase tracking-wide'>Message</label>
            <textarea
              {...register('message', { required: true })}
              placeholder='Tell me about your project...'
              rows={5}
              className={`${inputClass} resize-none`}
            />
            {errors.message && <p className='text-xs text-red-400'>Required</p>}
          </div>

          <button
            type='submit'
            className='w-fit px-6 py-2.5 bg-primary-bg/10 backdrop-blur-xs border border-primary/15  text-primary text-sm font-medium rounded-lg hover:bg-primary hover:text-primary-bg transition-all duration-300'
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  )
}