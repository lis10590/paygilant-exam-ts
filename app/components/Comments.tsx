// Comments.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

interface Comment {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface CommentsProps {
  comments: Comment[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="container w-4/5  h-auto rounded-lg shadow-md bg-white">
      {comments.map((comment: Comment) => (
        <div className="m-4" key={comment.id}>
          <h2 className="font-bold">{comment.name}</h2>
          <div className="flex p-4 items-center">
            <FontAwesomeIcon
              className="lg:w-10 lg:h-10 w-6 h-6"
              icon={faCircleUser}
            />
            <p className="ml-2 text-gray-400 text-sm">{comment.email}</p>
          </div>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
