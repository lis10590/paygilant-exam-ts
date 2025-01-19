//individual post page
import Comments from "../../components/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// interface PostCardProps {
//   params: { id: string };
// }

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
//get post by its id
const getPostById = async (
  postId: Promise<{ slug: string }>
): Promise<Post> => {
  try {
    const postData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?id=${postId}`
    );
    if (!postData.ok) {
      throw new Error(`HTTP error! status: ${postData.status}`);
    }
    const [post] = await postData.json();
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch post by its id!");
  }
};
//get comments by post id
const getCommentsById = async (
  postId: Promise<{ slug: string }>
): Promise<Comment[]> => {
  try {
    const commentsData = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    if (!commentsData.ok) {
      throw new Error(`HTTP error! status: ${commentsData.status}`);
    }
    const comments = await commentsData.json();
    return comments;
  } catch (error) {
    console.error(error);
    throw new Error("Couldn't fetch comments by post id!");
  }
};

const PostCard = async ({
  params,
}: {
  params: { id: Promise<{ slug: string }> };
}) => {
  const { id } = await params;
  const post = await getPostById(id);
  const comments = await getCommentsById(id);

  return (
    <div>
      <div className="m-8">
        <Link href="/">
          <button className="mr-2 bg-[#CBF1F5] hover:bg-[#A6E3E9] text-gray-800 font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faHouse} />
            <span className="ml-2">Back To Homepage</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-11 mb-4">
        <div className="lg:w-1/2">
          <h1 className="text-center lg:text-4xl sm:text-2xl font-bold">
            {post.title}
          </h1>
          <p className="m-8 lg:text-xl sm:text-lg">{post.body}</p>
        </div>
        <h1 className="mt-10 mb-4 lg:text-3xl sm:text-xl font-bold">
          Comments
        </h1>
        <Comments comments={comments} />
      </div>
    </div>
  );
};

export default PostCard;
