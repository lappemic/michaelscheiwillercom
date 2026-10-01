import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-2">
            <Image
              src="/static/favicons/favicon.svg"
              alt="Logo"
              width={24}
              height={24}
              className="dark:invert"
            />
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="font-serif text-xl text-warm-900 transition-colors duration-200 hover:text-accent-500 dark:text-warm-100 dark:hover:text-accent-400">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden text-sm font-medium tracking-wide text-warm-600 transition-colors duration-200 hover:text-warm-900 dark:text-warm-400 dark:hover:text-warm-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
