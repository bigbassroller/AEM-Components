import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
        <Link as={`/aemcomponents/${slug}`} href="/aemcomponents/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      </h3>
    </section>
  )
}
