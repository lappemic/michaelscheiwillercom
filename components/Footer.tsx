import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-warm-200 dark:border-warm-800">
      <div className="flex flex-col items-center py-12">
        <div className="mb-4 flex space-x-3">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
          <SocialIcon kind="x" href={siteMetadata.x} size={5} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-warm-500">
          <span>{`© ${new Date().getFullYear()}`}</span>
          <span>{` • `}</span>
          <span>{siteMetadata.author}</span>
        </div>
        <div className="text-sm text-warm-500 dark:text-warm-400">
          <Link href="/">Home</Link>
          <span className="mx-2">·</span>
          <Link href="/blog">Writing</Link>
          <span className="mx-2">·</span>
          <Link href="/projects">Projects</Link>
          <span className="mx-2">·</span>
          <Link href="/now">Now</Link>
        </div>
      </div>
    </footer>
  )
}
