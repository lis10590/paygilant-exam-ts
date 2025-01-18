//individual post page
import Comments from "../components/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface PostCardProps {
  params: { id: string };
}

const PostCard = async ({ params }: PostCardProps) => {
  const { id } = await params;
  //fetching post by id
  const postData = await fetch(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`
  );
  const [post] = await postData.json();
  //fetching comments by id
  const commentsData = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const comments = await commentsData.json();

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
