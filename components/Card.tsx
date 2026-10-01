import Image from 'next/image'
import Link from 'next/link'
import { parseMarkdownLinks } from '../utils/markdown'

interface CardProps {
  title: string
  description: string
  imgSrc?: string
  href?: string
  badge?: string
}

export default function Card({ title, description, imgSrc, href, badge }: CardProps) {
  return (
    <div className="w-full">
      <div className="flex overflow-hidden rounded-lg border border-warm-200 bg-warm-100/50 transition-all duration-300 hover:border-warm-300 hover:shadow-md dark:border-warm-800 dark:bg-warm-900/50 dark:hover:border-warm-600">
        {imgSrc && (
          <div className="hidden w-1/4 max-w-[180px] sm:block">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrc}
                  className="h-full object-cover object-center"
                  width={180}
                  height={120}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrc}
                className="h-full object-cover object-center"
                width={180}
                height={120}
              />
            )}
          </div>
        )}
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl leading-6 tracking-tight text-warm-900 dark:text-warm-100">
              {href ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </h2>
            {badge && (
              <span className="rounded-full bg-warm-200 px-2 py-0.5 text-xs font-medium text-warm-600 dark:bg-warm-700 dark:text-warm-300">
                {badge}
              </span>
            )}
          </div>
          <p
            className="prose mt-2 line-clamp-2 text-sm text-warm-600 dark:text-warm-400"
            dangerouslySetInnerHTML={{ __html: parseMarkdownLinks(description) }}
          />
          {href && (
            <Link
              href={href}
              className="mt-3 inline-block text-xs font-medium text-warm-900 underline decoration-warm-300 decoration-1 underline-offset-4 transition-colors duration-200 hover:text-accent-500 hover:decoration-accent-500 dark:text-warm-100 dark:decoration-warm-600 dark:hover:text-accent-400 dark:hover:decoration-accent-400"
              aria-label={`Link to ${title}`}
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
