import projectsData from '@/data/projectsData'
import openSourceData from '@/data/openSourceData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-warm-200 dark:divide-warm-700">
        <div className="space-y-2 pb-6 pt-6 md:space-y-4">
          <h1 className="font-serif text-2xl leading-8 tracking-tight text-warm-900 dark:text-warm-100 sm:text-3xl sm:leading-9">
            Projects
          </h1>
          <p className="text-base leading-7 text-warm-600 dark:text-warm-400">
            Selection of projects i have worked on. Some are just MVPs to validate an idea, others
            are more advanced web apps.
          </p>
        </div>
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                badge={d.badge}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2 pb-6 pt-6 md:space-y-4">
          <h1 className="font-serif text-2xl leading-8 tracking-tight text-warm-900 dark:text-warm-100 sm:text-3xl sm:leading-9">
            Contributions
          </h1>
          <p className="text-base leading-7 text-warm-600 dark:text-warm-400">
            Selection of my opensource contributions.
          </p>
        </div>
        <div className="container py-8">
          <div className="flex flex-col space-y-6">
            {openSourceData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
