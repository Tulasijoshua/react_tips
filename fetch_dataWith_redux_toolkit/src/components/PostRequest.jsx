import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/feature/postSlice'

const PostRequest = () => {
    const dispatch = useDispatch()
    const {posts, loading} = useSelector((state) => state.post)

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if (loading) {
        return <h2>Loading.......</h2>
    }

  return (
    <div>
        {posts.map((item, index) => (
            <h2 key={index}>{item.title}</h2>
        ))}
    </div>
  )
}

export default PostRequest