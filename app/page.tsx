// import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
// import { allBlogs } from 'contentlayer/generated'
// import Main from './Main'

// export default async function Page() {
//   const sortedPosts = sortPosts(allBlogs)
//   const posts = allCoreContent(sortedPosts)
//   return <Main posts={posts} />
// }

import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import { components as MDXComponents } from '@/components/MDXComponents'

export const metadata = genPageMetadata({ title: 'Home' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <div className="dark:prose-dark prose max-w-none text-base leading-relaxed text-warm-700 dark:text-warm-300">
          <MDXLayoutRenderer code={author.body.code} components={MDXComponents} />
        </div>
      </AuthorLayout>
    </>
  )
}
