import PostPreview from '../components/post-preview'

export default function Sidebar({ posts }) {
  return (
    <div className="sidebar">
      <div className="nav-wrapper">
        <nav className="nav">
          <ul>
            {posts.map(({ node }) => (
              <PostPreview
                key={node.slug}
                title={node.title}
                coverImage={node.featuredImage?.node}
                date={node.date}
                author={node.author?.node}
                slug={node.slug}
                excerpt={node.excerpt}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
