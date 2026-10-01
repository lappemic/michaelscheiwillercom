/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  const baseClasses =
    'underline decoration-warm-300 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent-500 hover:decoration-accent-500 dark:decoration-warm-700 dark:hover:decoration-accent-400 dark:hover:text-accent-400'

  if (isInternalLink) {
    return <Link href={href} className={baseClasses} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} className={baseClasses} {...rest} />
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} {...rest} />
  )
}

export default CustomLink
