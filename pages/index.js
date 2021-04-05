import Head from 'next/head'
import Container from '../components/container'
import Sidebar from '../components/sidebar'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome, getAllAemComponentCategoriesAndPosts } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { aemComponentCategories: {edges} }, preview }) {

  const heroPost = edges[0]?.node
  const posts = edges

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          {heroPost && (
            <HeroPost
              title={"Hello There"}
              slug={heroPost.slug}
            />
          )}
          {posts.length > 0 && <Sidebar posts={posts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllAemComponentCategoriesAndPosts(preview)

  console.log("🖖 allPosts: ")
  console.log(allPosts)

  return {
    props: { allPosts, preview },
  }
}
