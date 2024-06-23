import type { NextPage } from 'next'
// type
import PostOnListType from '../types/PostOnListType'
// service
import PostService from '../services/PostService'
// hooks
import usePostListSwr from '../hooks/swr/usePostListSwr'
// component
import PostBox from '../components/molecules/PostBox'
import Layout from '../components/templates/Layout'

const Home: NextPage<{
  staticPostList: PostOnListType[]
}> = ({ staticPostList }) => {
  // 正しい引数を usePostListSwr に渡す
  const postList = usePostListSwr({ staticPostList })
  return (
    <Layout>
      <div className='flex flex-wrap w-main mx-auto'>
        {postList!.map((post) => {
          return (
            <div key={post.id} className='w-1/3 pr-4 pb-4 [&:nth-of-type(3n)]:pr-0'>
              <PostBox post={post} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const staticPostList = await PostService.getList({});
  return {
    props: {
      staticPostList: staticPostList
    },
    revalidate: 10
  }
}

export default Home