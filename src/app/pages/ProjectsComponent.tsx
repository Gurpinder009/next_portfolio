'use client'
import { GitBranch, ExternalLink } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'

const projects = [
  {
    num: '01',
    title: 'Math Tutor Hub',
    desc: 'A Flutter learning app for students — assignments, quizzes, notes. Built with BLoC/Cubit state management and Spring Boot backend.',
    tags: ['Flutter', 'Spring Boot', 'BLoC'],
    github: 'https://github.com/Gurpinder009',
    live: '#',
  },
  {
    num: '02',
    title: 'QR Payroll Platform',
    desc: 'Production payroll system using QR codes for attendance tracking. Deployed for a local business client.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#',
  },
  {
    num: '03',
    title: 'Portfolio Website',
    desc: 'This very site — built with Next.js, Tailwind v4, and a custom design system. Fully responsive with a dark tech aesthetic.',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    github: '#',
    live: '#',
  },
]

function ProjectCard({ p, index }: { p: typeof projects[0], index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className='border border-primary/15 bg-primary-bg-lighter/10 backdrop-blur-xs border-l-2 border-l-primary rounded-r-xl p-6 flex flex-col gap-3 hover:border-l-primary-light transition-all duration-300'
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <p className='text-xs text-primary font-bold tracking-widest'>{p.num}</p>
      <h3 className='text-base font-bold'>{p.title}</h3>
      <p className='text-sm text-gray-400 leading-relaxed flex-1'>{p.desc}</p>
      <div className='flex flex-wrap gap-1.5'>
        {p.tags.map(tag => (
          <span key={tag} className='text-xs font-semibold px-2 py-0.5 bg-primary-bg-lighter/10 backdrop-blur-xs text-primary rounded-full tracking-wide'>
            {tag}
          </span>
        ))}
      </div>
      <hr className='border-primary/10' />
      <div className='flex gap-4'>
        <a href={p.github} className='flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors'>
          <GitBranch size={12} /> GitHub
        </a>
        <a href={p.live} className='flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary transition-colors'>
          <ExternalLink size={12} /> Live
        </a>
      </div>
    </div>
  )
}

export default function ProjectsComponent() {
  const titleRef = useScrollAnimation()

  return (
    <div className='min-h-screen px-6 md:px-15 lg:px-45 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden'>

      <div className='absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2'>Things I&apos;ve built</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          My <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-sm text-gray-400 mb-12 max-w-xl'>
          A selection of projects I&apos;ve built and shipped — from production client work to personal apps.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} p={p} index={i} />
        ))}
      </div>
    </div>
  )
}