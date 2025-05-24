import Posts from '../../components/Posts'

export default function PostsPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
          Latest Posts
        </h1>
        <Posts showAdminControls={false} />
      </main>
    </div>
  )
}
