import { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface Props {
  label: string
  variant?: 'primary' | 'secondary'
  classes?: string
  animate?: boolean
  delay?: number
  onClick?: () => void
}

const MotionButton: FC<Props> = ({ label, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-background group relative h-10 min-w-[120px] px-8 cursor-pointer rounded-full border-none outline-none overflow-hidden transition-all hover:scale-[1.02] flex items-center justify-center',
        classes
      )}
    >
      <span
        className='absolute left-0 top-1/2 -translate-y-1/2 bg-primary m-0 block h-8 w-8 overflow-hidden rounded-full duration-500 group-hover:h-full group-hover:w-full transition-all ease-in-out z-10'
        aria-hidden='true'
      ></span>
      <div className='absolute top-1/2 left-3 -translate-y-1/2 duration-500 group-hover:translate-x-1 z-20'>
        <ArrowRight className='text-white size-3.5 mix-blend-difference' />
      </div>
      <span className='relative text-center text-[12px] font-extrabold tracking-tight whitespace-nowrap duration-500 text-foreground group-hover:text-white z-20'>
        {label}
      </span>
    </button>
  )
}

export default MotionButton
