import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-red-500">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/admin/signals" className="bg-gray-800 p-6 rounded-lg border border-red-500 hover:bg-gray-700 transition-colors">
          <h3 className="text-xl font-semibold mb-2 text-red-500">Manage Signals</h3>
          <p className="text-gray-300">Add, edit, or delete trading signals</p>
        </Link>
        <Link href="/admin/posts" className="bg-gray-800 p-6 rounded-lg border border-red-500 hover:bg-gray-700 transition-colors">
          <h3 className="text-xl font-semibold mb-2 text-red-500">Manage Posts</h3>
          <p className="text-gray-300">Create, edit, or delete blog posts</p>
        </Link>
      </div>
    </div>
  )
}
