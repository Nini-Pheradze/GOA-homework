import posts from '@/app/data/posts.json';
import PostList from '@/app/components/PostList';

export default function HomePage() {
  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h1>პოსტები</h1>
      <PostList posts={posts} />
    </main>
  );
}
