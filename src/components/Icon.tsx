import type { ReactNode } from 'react'

type IconProps = {
  children: ReactNode
  className?: string
}

export function Icon({ children, className = '' }: IconProps) {
  return <span aria-hidden="true" className={`inline-block min-w-4 text-center font-[Arial,sans-serif] ${className}`}>{children}</span>
}
