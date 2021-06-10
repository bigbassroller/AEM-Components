import Link from 'next/link'
import PostPreview from '../components/post-preview'

export default function PostsFromCategoryList({
  title,
  slug,
  aemcomponents,
}) {
  return (
    <div>
      <Link as={`/aemcomponents/${slug}`} href="/aemcomponents/[slug]">
        <a
          className="text-red-500"
          dangerouslySetInnerHTML={{ __html: title }}
        ></a>
      </Link>
      <div>
        <div>
          {aemcomponents.nodes.map(node => (
            <PostPreview
              key={node.id}
              title={node.title}
              slug={node.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
