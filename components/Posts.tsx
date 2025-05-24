'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Edit2, Trash2, AlertCircle } from 'lucide-react'
import { db } from '../utils/firebase'
import { ref, onValue, push, remove, update, query, DatabaseReference } from 'firebase/database'

interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function Posts({ showAdminControls = false }) {
  const [posts, setPosts] = useState<Post[]>([])
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const postsRef: DatabaseReference = query(ref(db, 'posts'))
    
    const unsubscribe = onValue(postsRef, (snapshot) => {
      setIsLoading(true)
      try {
        const data = snapshot.val()
        if (data) {
          const postsList: Post[] = Object.entries(data)
            .map(([key, value]: [string, any]) => ({
              id: key,
              ...value,
            }))
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          setPosts(postsList)
        } else {
          setPosts([])
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError('Failed to fetch posts. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }, (error) => {
      console.error('Error in onValue:', error)
      setError('An error occurred while fetching posts. Please try again later.')
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const handleEdit = (post: Post) => {
    setEditingPost(post)
  }

  const handleDelete = async (id: string) => {
    try {
      const postRef = ref(db, `posts/${id}`)
      await remove(postRef)
    } catch (error) {
      console.error('Error deleting post:', error)
      setError('Failed to delete post. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const postData = Object.fromEntries(formData)

    try {
      if (editingPost) {
        const postRef = ref(db, `posts/${editingPost.id}`)
        await update(postRef, { ...postData, updatedAt: new Date().toISOString() })
      } else {
        const postsRef = ref(db, 'posts')
        await push(postsRef, { ...postData, createdAt: new Date().toISOString() })
      }
      setEditingPost(null)
      e.currentTarget.reset()
    } catch (error) {
      console.error('Error submitting post:', error)
      setError('Failed to submit post. Please try again.')
    }
  }

  if (isLoading) {
    return <div className="text-center">Loading posts...</div>
  }

  if (error) {
    return (
      <div className="text-red-500 text-center flex items-center justify-center">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
        Latest Posts
      </h2>
      {showAdminControls && (
        <form onSubmit={handleSubmit} className="mb-8 bg-gray-800 p-6 rounded-lg border border-red-500">
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={editingPost?.title || ''}
            className="w-full bg-gray-700 text-white p-2 rounded mb-4"
            required
          />
          <textarea
            name="content"
            placeholder="Content"
            defaultValue={editingPost?.content || ''}
            className="w-full bg-gray-700 text-white p-2 rounded mb-4"
            rows={4}
            required
          ></textarea>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            {editingPost ? 'Update Post' : 'Add Post'}
          </button>
        </form>
      )}
      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-400">No posts available at the moment.</p>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg border border-red-500 shadow-lg hover:shadow-red-500/20 transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-red-500">{post.title}</h3>
              <p className="text-gray-300 mb-4">{post.content}</p>
              <p className="text-sm text-gray-400">
                Posted on: {new Date(post.createdAt).toLocaleString()}
              </p>
              {showAdminControls && (
                <div className="mt-4 flex justify-end space-x-2">
                  <button onClick={() => handleEdit(post)} className="text-blue-500 hover:text-blue-600">
                    <Edit2 size={18} />
                  </button>
                  <button onClick={() => handleDelete(post.id)} className="text-red-500 hover:text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          ))
        )}
      </div>
    </section>
  )
}
