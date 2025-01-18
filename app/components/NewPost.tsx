// NewPost.tsx
"use client";
import { useState } from "react";

interface NewPostProps {
  onAddPost: (newPost: Post) => void;
  onClose: () => void;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const NewPost = ({ onAddPost, onClose }: NewPostProps) => {
  // State management of inputs
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Handles new post submit and passes the title and body to Posts component
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddPost({ id: Date.now(), title, body });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-bold mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body">Body:</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full border rounded-md p-2"
              rows={4}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="mr-2 bg-[#CBF1F5] hover:bg-[#A6E3E9] text-gray-800 font-bold py-2 px-4 rounded"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPost;
