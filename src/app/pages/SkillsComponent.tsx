'use client'
import { Laptop, Cloud, Smartphone } from 'lucide-react'
import { useScrollAnimation, useInView } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    title: 'Mobile',
    icon: <Smartphone size={16}/>,
    skills: [
      { name: 'Flutter', pct: 90 },
      { name: 'Dart', pct: 88 },
      { name: 'Android (Kotlin)', pct: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: <Laptop size={16} />,
    skills: [
      { name: 'React', pct: 88 },
      { name: 'Next.js', pct: 85 },
      { name: 'TypeScript', pct: 80 },
      { name: 'Tailwind CSS', pct: 85 },
    ],
  },
  {
    title: 'Backend & Cloud',
    icon: <Cloud size={16}/>,
    skills: [
      { name: 'Spring Boot', pct: 82 },
      { name: 'GCP', pct: 72 },
      { name: 'Docker', pct: 70 },
      { name: 'MongoDB', pct: 75 },
    ],
  },
]
function SkillCard({ cat, delay }: { cat: typeof skillCategories[0], delay: string }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className='border border-primary/15 bg-primary-bg-lighter/10 backdrop-blur-xs border-l-2 border-l-primary rounded-r-xl p-6 flex flex-col gap-5 hover:border-l-primary-light transition-all duration-500'
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease, transform 0.6s ease`,
      }}
    >
      <div className='flex items-center justify-between'>
        <p className='text-xs tracking-widest text-primary uppercase font-semibold'>{cat.title}</p>
        <span className='text-lg'>{cat.icon}</span>
      </div>

      <div className='flex flex-col gap-4'>
        {cat.skills.map((skill, i) => (
          <div key={skill.name} className='flex flex-col gap-1.5'>
            <div className='flex justify-between text-xs'>
              <span className='text-slate-200'>{skill.name}</span>
              <span className='text-primary font-semibold'>
                {inView ? `${skill.pct}%` : '0%'}
              </span>
            </div>
            <div className='h-1.5 bg-primary-bg-lighter/10 backdrop-blur-xs rounded-full overflow-hidden'>
              <div
                className='h-1.5 bg-primary rounded-full'
                style={{
                  width: inView ? `${skill.pct}%` : '0%',
                  transition: `width 0.8s ease ${i * 0.1 + 0.2}s`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className='mt-auto pt-3 border-t border-primary/10 flex justify-between text-xs text-gray-500'>
        <span>{cat.skills.length} skills</span>
        <span>{Math.round(cat.skills.reduce((a, s) => a + s.pct, 0) / cat.skills.length)}% avg</span>
      </div>
    </div>
  )
}


export default function SkillsComponent() {
  const titleRef = useScrollAnimation()

  return (
    <div className='min-h-screen px-6 md:px-15 lg:px-45 py-16 md:py-20 flex flex-col justify-center relative overflow-hidden'>

      <div className='absolute bottom-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none' />
      <div className='absolute top-1/2 right-0 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div ref={titleRef} className='scroll-reveal'>
        <p className='text-xs tracking-widest text-primary uppercase mb-2'>What I work with</p>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          My <span className='text-primary'>Skills</span>
        </h2>
        <p className='text-sm text-gray-400 mb-12 max-w-xl'>
          A breakdown of the technologies I work with day-to-day — from mobile to cloud.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {skillCategories.map((cat, i) => (
          <SkillCard
            key={cat.title}
            cat={cat}
            delay={`delay-${(i + 1) * 100}`}
          />
        ))}
      </div>
    </div>
  )
}