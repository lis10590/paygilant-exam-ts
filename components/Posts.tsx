// Posts.tsx
"use client";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import NewPost from "./NewPost";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  allPosts: Post[];
}

const Posts = ({ allPosts }: PostsProps) => {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  // Function handling the change of the search query
  const handleQuery = (query: string) => {
    setSearchQuery(query);
  };

  // Re-rendering when posts or query change
  useEffect(() => {
    setPosts(allPosts);
  }, [searchQuery, allPosts]);

  // Handles addition of new post (only changes the state because there's no DB)
  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setIsModalOpen(false);
  };

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="self-start m-4">
        <button
          className="bg-[#CBF1F5] hover:bg-[#A6E3E9] text-gray-800 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <FontAwesomeIcon icon={faPlus} size="sm" />
          <span className="ml-2">New Post</span>
        </button>
      </div>
      {isModalOpen && (
        <NewPost
          onAddPost={handleAddPost}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <SearchBar onSearch={handleQuery} />
      <div className="grid  lg:grid-cols-3 gap-4 sm:grid-cols-2">
        {posts
          .filter((item: Post) =>
            item.title.toLowerCase().includes(searchQuery)
          )
          .map((post: Post) => (
            <Link key={post.id} href={`/${post.id}`}>
              <Card title={post.title} body={post.body} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Posts;
