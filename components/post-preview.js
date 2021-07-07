import Link from 'next/link'

export default function PostPreview({
  title,
  slug
}) {
  return (
    <li>
      <Link as={`/aemcomponents/${slug}`} href="/aemcomponents/[slug]">
        <a
          className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
      </Link>
    </li>
  )
}
