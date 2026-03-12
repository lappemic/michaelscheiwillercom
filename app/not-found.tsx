import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="font-serif text-6xl leading-9 tracking-tight text-warm-900 dark:text-warm-100 md:border-r-2 md:border-warm-200 md:px-6 md:text-8xl md:leading-14 dark:md:border-warm-700">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 font-serif text-xl leading-normal text-warm-900 dark:text-warm-100 md:text-2xl">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8 text-warm-600 dark:text-warm-400">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-accent inline rounded-lg border border-transparent bg-accent-500 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-200 hover:bg-accent-600 focus:outline-none"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
