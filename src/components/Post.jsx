import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const { title, body, reactions, tags,id } = post;

  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(id)}
            >
              <MdAutoDelete />
            </span>
          </h5>
          <p className="card-text">{body}</p>
          {tags.map((tags) => (
            <span  key={tags} className="badge text-bg-primary hashtag">{tags}</span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post has been reacted by Likes: {reactions.likes} Dislikes :{reactions.dislikes} peoples.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
