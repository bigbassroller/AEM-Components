import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'

export default function PostHeader({
  title,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
    </>
  )
}
