import { Metadata } from 'next'
import { getLinks } from '@/lib/getLinks'

export const metadata: Metadata = {
  title: 'Links',
  description: 'Interesting links I come across',
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  } catch {
    return dateString
  }
}

function getDomain(url: string): string {
  try {
    const hostname = new URL(url).hostname
    return hostname.replace('www.', '')
  } catch {
    return url
  }
}

export default async function LinksPage() {
  const links = await getLinks()

  return (
    <div className="divide-y divide-warm-200 dark:divide-warm-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="font-serif text-2xl leading-8 tracking-tight text-warm-900 dark:text-warm-100 sm:text-3xl sm:leading-9">
          Links
        </h1>
        <p className="text-base leading-7 text-warm-600 dark:text-warm-400">
          Interesting stuff I come across
        </p>
      </div>

      <div className="pt-8">
        {links.length === 0 ? (
          <p className="text-warm-500">No links yet.</p>
        ) : (
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={`${link.url}-${index}`} className="group">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg p-4 transition-all duration-200 hover:bg-warm-100 dark:hover:bg-warm-900"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-medium text-warm-900 transition-colors duration-200 group-hover:text-accent-500 dark:text-warm-100 dark:group-hover:text-accent-400">
                        {link.title || getDomain(link.url)}
                      </h2>
                      <p className="mt-1 truncate text-sm text-warm-500 dark:text-warm-500">
                        {getDomain(link.url)}
                      </p>
                    </div>
                    <time className="shrink-0 text-sm text-warm-400 dark:text-warm-600">
                      {formatDate(link.date)}
                    </time>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
