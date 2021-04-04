import Link from 'next/link'

export default function PostPreview({
  title,
  slug
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/aemcomponents/${slug}`} href="/aemcomponents/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
    </div>
  )
}
