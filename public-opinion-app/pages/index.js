import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data } = await supabase.from('posts').select('*')
    setPosts(data || [])
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Public Opinion Platform</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          {post.content}
        </div>
      ))}
    </div>
  )
}