'use client'
import { Smartphone, Monitor, Server, Cloud, Globe, Users } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'
import Chip from '../components/Chip';

const services = [
  {
    icon: <Smartphone size={16} className='text-primary' />,
    title: 'Mobile Development',
    desc: 'Cross-platform mobile apps built with Flutter. Clean UI, solid state management, and real backend integration.',
    chips: ['Flutter', 'Dart', 'BLoC', 'REST APIs'],
  },
  {
    icon: <Monitor size={16} className='text-primary' />,
    title: 'Frontend Development',
    desc: 'Responsive, pixel-perfect web interfaces with React and Next.js. Fast, accessible, and built to impress.',
    chips: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    icon: <Server size={16} className='text-primary' />,
    title: 'Backend & APIs',
    desc: 'Scalable REST APIs and backend services. Auth, databases, and cloud deployment handled end-to-end.',
    chips: ['Spring Boot', 'NestJS', 'PostgreSQL', 'MongoDB', 'JWT'],
  },
  {
    icon: <Cloud size={16} className='text-primary' />,
    title: 'Cloud & Deployment',
    desc: 'GCP and Azure infrastructure, Docker containerization, CI/CD pipelines, and production deployments.',
    chips: ['GCP', 'Azure', 'Docker', 'Vercel'],
  },
  {
    icon: <Globe size={16} className='text-primary' />,
    title: 'Client Websites',
    desc: 'Professional websites for small businesses and freelancers. Designed, built, and deployed — ready to go live.',
    chips: ['Custom Design', 'Responsive', 'SEO Ready'],
  },
  {
    icon: <Users size={16} className='text-primary' />,
    title: 'Freelance & Contract',
    desc: 'Available for short-term contracts, feature work, or ongoing freelance. Solo or within a team.',
    chips: ['Flexible', 'Remote', 'Full-stack'],
  },
]

function ServiceCard({ s, index }: { s: typeof services[0]; index: number }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className='bg-primary-bg border-l-2 border-l-primary rounded-r-xl p-6 flex flex-col gap-4 hover:border-l-primary-light transition-all duration-300'
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className='w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center'>
        {s.icon}
      </div>
      <h3 className='text-sm font-bold'>{s.title}</h3>
      <p className='text-xs text-gray-400 leading-relaxed flex-1'>{s.desc}</p>
      <hr className='border-primary/10' />
      <div className='flex flex-wrap gap-1.5'>
        {s.chips.map(chip => 
            <Chip key={chip} label={chip} />
        )}
      </div>
    </div>
  )
}

export default function ServicesComponent() {
  const titleRef = useScrollAnimation()

  return (
    <div className='min-h-screen px-6 md:px-15 lg:px-45 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden'>

      <div className='absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2'>What I offer</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          My <span className='text-primary'>Services</span>
        </h2>
        <p className='text-sm text-gray-400 mb-12 max-w-xl'>
          From concept to deployment — I build things that work, look good, and scale.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {services.map((s, i) => (
          <ServiceCard key={s.title} s={s} index={i} />
        ))}
      </div>
    </div>
  )
}