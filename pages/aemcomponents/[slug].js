import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import ContainerWithSidebar from '../../components/container-with-sidebar'
import PostBody from '../../components/post-body'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts, getAllAemComponentCategoriesAndPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'

import PanelBtn from '../../components/panel-btn'
import Example from '../../components/example'

export default function Post({post, posts, preview}) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <ContainerWithSidebar>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>

            <article className="content-wrapper">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <div className="entry-header">
                <h1 className="entry-title">{post.title}</h1>
              </div>
              <div className="entry-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
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
              <div className="entry-header">
                <h3 className="entry-title">Examples: </h3>
              </div>
              {post.aemComponentsFields.examples.map((node, index) => (
                <Example
                  key={index}
                  content={node.content}
                  properties={node.properties}
                  markup={node.markup}
                  json={node.json}
                  postcss={node.postcss}
                  css={node.css}
                  title={node.title}
                  index={index}
                />
              ))}
            </article>
            <SectionSeparator />
          </>
        )}
      </ContainerWithSidebar>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData)
  const allPosts = await getAllAemComponentCategoriesAndPosts(preview)

  return {
    props: {
      preview,
      allPosts,
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
