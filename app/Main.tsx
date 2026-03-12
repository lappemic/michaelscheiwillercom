import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-warm-200 dark:divide-warm-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-serif text-3xl leading-9 tracking-tight text-warm-900 dark:text-warm-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-warm-600 dark:text-warm-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-warm-200 dark:divide-warm-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-medium uppercase tracking-wider text-warm-500">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="font-serif text-2xl leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-warm-900 dark:text-warm-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap pt-1">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-warm-600 dark:text-warm-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:hover:text-accent-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:hover:text-accent-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
