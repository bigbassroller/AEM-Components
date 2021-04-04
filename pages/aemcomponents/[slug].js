import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ContainerWithSidebar from '../../components/container-with-sidebar'
import PostBody from '../../components/post-body'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'

import PanelBtn from '../../components/panel-btn'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <ContainerWithSidebar>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
              />
              <div className="buttons">
                <PanelBtn
                  title="Technical Documentation"
                  content="Github"
                  url={post.aemComponentsFields.githubUrl}
                  logo_name="Github"
                  logo_url="github-logo.svg"
                />
                <PanelBtn
                  title="Using Core Components"
                  content="Adobe Help Center"
                  url={post.aemComponentsFields.adobeUrl}
                  logo_name="Adobe"
                  logo_url="adobe-logo.svg"
                />
              </div>
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <Sidebar posts={morePosts} />}
          </>
        )}
      </ContainerWithSidebar>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.aemcomponent,
      posts: data.aemcomponents,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/aemcomponents/${node.slug}`) || [],
    fallback: true,
  }
}
