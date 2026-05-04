'use client'
import { GitBranch, ExternalLink } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'
import Image from 'next/image';


type Preview = { type: 'iframe'; src: string } | { type: 'image'; src: string } | { type: 'mock' }

type Project = {
  num: string
  title: string
  desc: string
  tags: string[]
  github: string
  live: string
  device: 'phone' | 'browser'
  preview: Preview
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Math Tutor Hub',
    desc: 'A Flutter learning app for students — assignments, quizzes, notes. Built with BLoC/Cubit state management and Spring Boot backend.',
    tags: ['Flutter', 'Spring Boot', 'BLoC'],
    github: 'https://github.com/Gurpinder009/math_tutor_hub',
    live: '#',
    device: 'phone',
    preview: { type: 'image', src: '/math_tutor.png' },
  },
  {
    num: '02',
    title: 'QR Payroll Platform',
    desc: 'Production payroll system using QR codes for attendance tracking. Deployed for a local business client.',
    tags: ['Flutter', 'NestJs', 'PostgreSQL'],
    github: 'https://github.com/rahulkumar-android25/F2025_4495_071_RKu556',
    live: 'https://vertex-admin-g0ewf6ddgncqe6dk.canadacentral-01.azurewebsites.net/',
    device: 'phone',
    preview: { type: 'image', src: '/qr-payroll.png' },
  },
  {
    num: '03',
    title: 'Mehndistudios.com',
    desc: 'Client website for a mehndi artist — showcasing portfolio, booking info, and services. Designed and deployed for a local small business.',
    tags: ['React', 'Tailwind', 'Vercel'],
    github: '#',
    live: 'https://www.mehndistudios.com',
    device: 'browser',
    preview: { type: 'iframe', src: 'https://www.mehndistudios.com' },
  },
]

function ScreenContent({ preview, title }: { preview: Preview; title: string }) {
  if (preview.type === 'iframe') {
    return (
      <iframe
        src={preview.src}
        title={title}
        className='border-0 absolute top-0 left-0'
        style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left' }}
        loading='lazy'
      />
    )
  }
 if (preview.type === 'image') {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={preview.src}
        alt={title}
        fill
        sizes='160px'
        className='object-cover object-top'
      />
    </div>
  )
}
  return (
    <div className='w-full h-full bg-secondary-bg flex items-center justify-center'>
      <p className='text-xs text-primary/40'>Preview unavailable</p>
    </div>
  )
}
function PhoneFrame({ preview, title }: { preview: Preview; title: string }) {
  return (
    <div className='relative mx-auto flex-shrink-0' style={{ width: '160px', height: '320px' }}>
      <div className='absolute inset-0 rounded-[2.5rem] border-[6px] border-primary/30 z-10 pointer-events-none' />
      <div className='absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 pointer-events-none' />
      <div className='absolute -left-2 top-16 w-1 h-8 bg-primary/20 rounded-l-full' />
      <div className='absolute -left-2 top-28 w-1 h-12 bg-primary/20 rounded-l-full' />
      <div className='absolute -right-2 top-20 w-1 h-10 bg-primary/20 rounded-r-full' />
      <div className='absolute inset-[6px] rounded-[2rem] overflow-hidden bg-black z-0'>
        <ScreenContent preview={preview} title={title} />
      </div>
    </div>
  )
}
function BrowserFrame({ preview, title, url }: { preview: Preview; title: string; url: string }) {
  return (
    <div className='w-full shrink-0 border border-primary/20 rounded-lg overflow-hidden bg-black' style={{ height: '220px' }}>
      <div className='bg-primary-bg px-3 py-2 flex items-center gap-2 border-b border-primary/10'>
        <div className='flex gap-1.5'>
          <div className='w-3 h-3 rounded-full bg-red-500/70' />
          <div className='w-3 h-3 rounded-full bg-yellow-500/70' />
          <div className='w-3 h-3 rounded-full bg-green-500/70' />
        </div>
        <div className='flex-1 bg-primary/10 rounded-md h-5 flex items-center px-2'>
          <span className='text-gray-500 text-[10px] truncate'>{url}</span>
        </div>
      </div>
      <div className='relative overflow-hidden' style={{ height: 'calc(220px - 36px)' }}>
        <ScreenContent preview={preview} title={title} />
      </div>
    </div>
  )
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className='border border-primary/15 bg-primary-bg border-l-2 border-l-primary rounded-r-xl p-5 flex flex-col gap-3 hover:border-l-primary-light transition-all duration-300'
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      {p.device === 'phone'
        ? <PhoneFrame preview={p.preview} title={p.title} />
        : <BrowserFrame preview={p.preview} title={p.title} url={p.live} />
      }

      <p className='text-xs text-primary font-bold tracking-widest'>{p.num}</p>
      <h3 className='text-base font-bold'>{p.title}</h3>
      <p className='text-sm text-gray-400 leading-relaxed flex-1'>{p.desc}</p>

      <div className='flex flex-wrap gap-1.5'>
        {p.tags.map(tag => (
          <span key={tag} className='text-xs font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full tracking-wide'>
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