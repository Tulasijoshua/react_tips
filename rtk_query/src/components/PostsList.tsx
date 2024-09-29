import React from 'react'
import { useGetPostsQuery } from '../state/posts/postsApiSlice';

const PostsList = () => {
    const {data: posts } = useGetPostsQuery({});
  return (
    <div>
        <ul>
            {posts?.map((post) => {
                return <li key={post.id}>{post.title}</li>
            })}
        </ul>
    </div>
  )
}

export default PostsList;