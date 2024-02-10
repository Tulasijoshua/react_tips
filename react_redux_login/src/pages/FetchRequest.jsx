import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../store'

const FetchRequest = () => {
    const dispatch = useDispatch()

    const post = useSelector(state => state.post)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
  return (
    <div>
        <h2>List of Posts</h2>
        <div>
            {post.loading && <div>Loading...</div>}
            {!post.loading && post.error ? <div>Error: {post.error}</div> : null}
            {!post.loading && post.posts.length ? (
                <ul>
                    {
                        post.posts.map(post => (
                            <li key={post.id}>{post.name}</li>
                        ))
                    }
                </ul>
            ) : null}
        </div>
    </div>
  )
}

export default FetchRequest