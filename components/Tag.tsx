import Link from 'next/link'
import { slug } from 'github-slugger'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-xs font-medium uppercase tracking-wider text-warm-500 transition-colors duration-200 hover:text-accent-500 dark:text-warm-400 dark:hover:text-accent-400"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
