import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/feature/postSlice'

const PostRequest = () => {
    const dispatch = useDispatch()
    const {posts, loading} = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

  return (
    <div>
        {posts.map((item, index) => (
            <h2>{item.title}</h2>
        ))}
    </div>
  )
}

export default PostRequest