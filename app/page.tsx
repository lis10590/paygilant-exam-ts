import Posts from "./components/Posts";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const response = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts: Post[] = await response.json();

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-6 font-bold text-5xl">Posts</h1>
      <Posts allPosts={posts} />
    </div>
  );
}
