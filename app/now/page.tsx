import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Now',
  description: "What I'm focusing on right now",
}

export default function Now() {
  return (
    <>
      <div className="divide-y divide-warm-200 dark:divide-warm-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="font-serif text-2xl leading-8 tracking-tight text-warm-900 dark:text-warm-100 sm:text-3xl sm:leading-9">
            Now
          </h1>
          <p className="text-base leading-7 text-warm-600 dark:text-warm-400">
            What I'm focusing on right now
          </p>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="dark:prose-dark prose max-w-none pb-8 pt-8 xl:col-span-3">
            <section className="mb-8">
              <h2 className="mb-4 font-serif text-xl text-warm-900 dark:text-warm-100">
                Current Focus
              </h2>
              <p className="text-base text-warm-700 dark:text-warm-300">
                This is my personal "now page" — inspired by{' '}
                <Link
                  href="https://nownownow.com/about"
                  className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Derek Sivers
                </Link>
                .
              </p>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 font-serif text-lg text-warm-900 dark:text-warm-100">
                Professional
              </h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-warm-700 dark:text-warm-300">
                <li>
                  Working on{' '}
                  <Link
                    href="https://leadershipbuddy.ch"
                    className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeadershipBuddy.ch
                  </Link>
                </li>
                <li>
                  Rebranding from freelancing to engineering studio{' '}
                  <Link
                    href="https://bytebricks.ch"
                    className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ByteBricks.ch
                  </Link>
                </li>
                <li>Recurring clients with smaller projects</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="mb-4 font-serif text-lg text-warm-900 dark:text-warm-100">Personal</h3>
              <ul className="list-disc space-y-1 pl-6 text-base text-warm-700 dark:text-warm-300">
                <li>Parenting takes up quite some time</li>
                <li>
                  Reading a lot since i heard{' '}
                  <Link
                    href="https://x.com/naval"
                    className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Naval's
                  </Link>{' '}
                  podcast with{' '}
                  <Link
                    href="https://x.com/tferriss"
                    className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tim Ferris
                  </Link>
                </li>
                <li>
                  I try to write (see{' '}
                  <Link
                    href="/blog"
                    className="text-accent-500 transition-colors duration-200 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-400"
                  >
                    blog
                  </Link>
                  )
                </li>
                <li>Working on consistency</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
