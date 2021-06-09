import PostsFromCategoryList from'../components/posts-from-category-list.js'

export default function Sidebar({ posts }) {

  return (
    <div className="sidebar">
      <div className="nav-wrapper">
        <nav className="nav">
          <ul>
            {posts.map(({ node }) => (
              <PostsFromCategoryList
                key={node.id}
                title={node.name}
                slug={node.slug}
                aemcomponents={node.aemcomponents}
              />
            ))}
          </ul>
        </nav>{}
      </div>
    </div>
  )
}
