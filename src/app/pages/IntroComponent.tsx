import { Mail, GitBranch } from "lucide-react";

const skills = ['FLUTTER', 'REACT', 'NEXT.JS', 'SPRING BOOT', 'GCP'];


export default function IntroComponent() {
  return (
    <div className='min-h-screen flex items-center justify-center px-6 md:px-15 py-16 md:py-0 relative overflow-hidden'>

      {/* decorative blurred circles */}
      <div className='absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-10 relative z-10'>

        <section className='border-l-3 border-l-primary pl-6 flex flex-col gap-2.5'>
          <p className='opacity-0 animate-fade-up delay-100 text-primary text-xs tracking-widest uppercase'>
            Hello, my name is
          </p>
          <h1 className='opacity-0 animate-fade-up delay-200 text-4xl md:text-5xl font-bold leading-tight'>
            Gurpinder<br />
            Singh <span className='text-primary'>Grewal</span>
          </h1>
          <p className='opacity-0 animate-fade-up delay-300 text-gray-400 text-sm leading-relaxed text-justify mt-1'>
            Full-stack and mobile developer with a{' '}
            <span className='text-primary font-medium'>3.98 GPA </span> (Dean&apos;s List) - graduating April 2026 and already shipping real things.
            Built a QR-based payroll platform, deployed client websites, and launched a Flutter learning app.
            Not looking for a seat at the table -{' '}
            <span className='text-primary font-medium'>looking to build it.</span>
          </p>
          <a 
          
          href="GurpinderSingh_Resume.pdf" download={true} 
          
          className=' bg-primary-bg/10 backdrop-blur-xs border border-primary/15 opacity-0 animate-fade-up delay-400 mt-2 w-fit flex items-center gap-2  text-primary px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-bg transition-all duration-300'>
            Download CV
          </a>
        </section>

        <div className='opacity-0 animate-fade-in delay-500 flex justify-center'>
          <section className='animate-float flex items-center justify-center w-full md:w-fit'>
            <div className='bg-primary-bg/10 backdrop-blur-xs border border-primary/50 rounded-tl-4xl rounded-br-4xl  p-7 w-full flex flex-col gap-3.5'>
              <div className='flex items-center gap-2 text-xs text-gray-400'>
                <span className='w-2 h-2 rounded-full bg-primary inline-block animate-pulse' />
                Available — Fulltime / Freelance
              </div>
              <hr className='border-primary/10' />
              <div className='flex items-center gap-3'>
                
                 <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                  <Mail  size={14} className='text-primary' />
                
                
                
                
                
                </div>
                <span className='text-sm text-slate-300'>Gurpinders1511@gmail.com</span>
              </div>
              <div className='flex items-center gap-3'>
                 <div className='w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0'>
                  <GitBranch  size={14} className='text-primary' />
                
                
                
                
                
                </div>
                <a href='https://github.com/Gurpinder009' className='text-sm text-primary'>github.com/Gurpinder009</a>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-7 h-7 bg-primary/10 rounded-md flex items-center justify-center shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#12F7D6">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <a href="https://www.linkedin.com/in/gurpindersingh009/" className='text-sm text-primary'>
                  linkedin.com/in/gurpindersingh009
                </a>
              </div>
              <hr className='border-primary/10' />
              <div className='flex flex-wrap gap-1.5'>
                {skills.map(s => (
                  <span key={s} className='text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full tracking-wide hover:bg-primary hover:text-primary-bg transition-all duration-300 cursor-default'>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>

      </div>
    </div>
  )
}