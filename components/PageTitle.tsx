import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="font-serif text-3xl tracking-tight text-warm-900 dark:text-warm-100 sm:text-4xl">
      {children}
    </h1>
  )
}
