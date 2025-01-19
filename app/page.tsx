import Posts from "../components/Posts";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
//getPosts async function
const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: Post[] = await response.json();
    return posts;
  } catch (error) {
    // toast.error("Failed to fetch posts. Please try again.");
    return [];
  }
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-6 font-bold text-5xl">Posts</h1>
      <Posts allPosts={posts} />
    </div>
  );
}
