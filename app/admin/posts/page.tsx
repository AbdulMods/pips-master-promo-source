'use client'

import Posts from '../../../components/Posts'

export default function ManagePosts() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-500">Manage Posts</h2>
      <Posts showAdminControls={true} />
    </div>
  )
}
