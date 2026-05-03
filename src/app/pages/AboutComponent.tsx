"use client"
import React from 'react'
import { User, MapPin, Mail, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { num: '3.99', label: "GPA — Dean's List" },
  { num: '3+', label: 'Production Apps' },
  { num: '5+', label: 'Technologies' },
  { num: '2026', label: 'Graduating April' },
]

const info = [
  { label: 'Name', value: 'Gurpinder Singh Grewal', icon: <User size={14} className='text-primary' /> },
  { label: 'Location', value: 'British Columbia, Canada', icon: <MapPin size={14} className='text-primary' /> },
  { label: 'Email', value: 'Gurpinders1511@gmail.com', icon: <Mail size={14} className='text-primary' /> },
  { label: 'Availability', value: 'Fulltime / Freelance', icon: <Briefcase size={14} className='text-primary' /> },
]
export default function AboutComponent() {
  const titleRef = useScrollAnimation()
  const bioRef = useScrollAnimation()
  const statsRef = useScrollAnimation()
  const infoRef = useScrollAnimation()

  return (
    <div className='min-h-screen   flex flex-col justify-center px-6 md:px-15 lg:px-45 py-16 relative overflow-hidden'>

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2 '>Get to know me</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-12'>
          About <span className='text-primary'>Me</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 items-start'>

        <div className='lg:col-span-3 flex flex-col gap-8'>
          <div ref={bioRef} className='scroll-reveal delay-100 flex flex-col gap-4 text-sm text-gray-400 leading-relaxed '>
            <p>
              I&apos;m a <span className='text-primary font-medium'>full-stack and mobile developer</span> based
              in BC, Canada. I enjoy working across the entire stack — whether that&apos;s designing a clean UI,
              architecting a backend API, or deploying to the cloud. I care about writing code that&apos;s
              maintainable, not just functional.
            </p>
            <p>
              I&apos;ve shipped real products: a <span className='text-primary font-medium'>QR-based payroll platform</span> used
              by a local business, multiple <span className='text-primary font-medium'>client websites</span> deployed to
              production, and a <span className='text-primary font-medium'>Flutter learning app</span> built for students
              with assignments, quizzes, and notes — backed by a Spring Boot REST API.
            </p>
            <p>
              Outside of code, I&apos;m drawn to clean design, developer tooling, and anything that makes
              building software faster or more enjoyable. I&apos;m currently finishing my{' '}
              <span className='text-primary font-medium'>Computer and Information System Post Baccalaureate Diploma</span> at Douglas College
              — graduating April 2026 with a 3.99 GPA and Dean&apos;s List recognition — and actively looking
              for a developer role where I can own features end-to-end.
            </p>
          </div>

          <div ref={statsRef} className='scroll-reveal delay-200 grid grid-cols-2 md:grid-cols-4 gap-3'>
            {stats.map(s => (
              <div key={s.label} className='s border border-primary/15 bg-primary-bg-lighter/10 backdrop-blur-xs hover:text-primary border-t-2 border-t-light rounded-b-xl p-4 hover:border-primary transition-colors duration-300'>
                <p className='text-3xl font-bold '>{s.num}</p>
                <p className='text-xs text-gray-400 mt-1'>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={infoRef} className='scroll-reveal delay-300 flex flex-col lg:col-span-2 gap-4'>
          <div className='border border-primary/15 bg-primary-bg-lighter/10 backdrop-blur-xs border-l-2 border-l-primary  rounded-r-xl p-6 flex flex-col gap-4'>
            {info.map((item, i) => (
              <React.Fragment key={item.label}>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-primary-bg-lighter/10 backdrop-blur-xs rounded-lg flex items-center justify-center shrink-0'>{item.icon}</div>
                  <div>
                    <p className='text-xs text-gray-500'>{item.label}</p>
                    <p className='text-sm text-slate-200 font-medium'>{item.value}</p>
                  </div>
                </div>
                {i < info.length - 1 && <hr className='border-primary/10' />}
              </React.Fragment>
            ))}
          </div>
          <div className=' border border-primary/15 border-l-3 border-l-primary bg-primary-bg-lighter/10 backdrop-blur-xs rounded-r-xl p-5'>
            <p className='text-sm font-semibold text-white'>Computer Systems & Information Technology</p>
            <p className='text-xs text-gray-400 mt-1'>Douglas College — New Westminster, BC</p>
            <p className='text-xs text-primary font-medium mt-2'>3.99 GPA · Dean&apos;s List · Graduating April 2026</p>
          </div>
        </div>

      </div>
    </div>
  )
}