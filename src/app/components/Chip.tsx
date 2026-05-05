export default function Chip({ label }: { label: string }) {
  return (
    <span className='text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full tracking-wide hover:bg-primary hover:text-primary-bg transition-all duration-300 cursor-default'>
      {label}
    </span>
  )
}