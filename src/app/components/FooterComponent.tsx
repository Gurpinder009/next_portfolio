import { GitBranch, Link, Mail } from 'lucide-react'

const socials = [
  { icon: <GitBranch size={14} className='text-primary' />, href: 'https://github.com/Gurpinder009' },
  { icon: <Link size={14} className='text-primary' />, href: 'https://www.linkedin.com/in/gurpindersingh009/' },
  { icon: <Mail size={14} className='text-primary' />, href: 'mailto:Gurpinders1511@gmail.com' },
]

export default function FooterComponent() {
  return (
    <footer className='border-t border-primary/10 px-6 md:px-15 py-8 bg-secondary-bg'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-4'>

        <div>
          <p className='text-lg font-bold'>Gurpinder <span className='text-primary'>Singh</span></p>
          <p className='text-xs text-gray-500 mt-0.5'>Full-stack & Mobile Developer</p>
        </div>

        <div className='flex gap-2.5'>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target='_blank'
              className='w-9 h-9 bg-primary-bg border border-primary/10 rounded-lg flex items-center justify-center hover:border-primary/40 transition-colors duration-300'
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className='text-xs text-gray-500 text-center md:text-right'>
          © {new Date().getFullYear()} <span className='text-primary'>Gurpinder Singh Grewal</span><br />
          All rights reserved.
        </p>

      </div>
    </footer>
  )
}