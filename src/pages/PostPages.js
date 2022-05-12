import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../store/postpage/action";
import { selectPostAndComments } from "../store/postpage/selector";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function PostPages() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);
  console.log(postData);

  return (
    <div>
      <Link to={"/"}>
        <h1>Homepage</h1>
      </Link>
      {!postData ? (
        "Loading"
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">{postData.post.createdAt}</p>
          <p>{postData.post.developer.name}</p>
          <p>{postData.post.tags.map((p) => p.tag)}</p>
          <ReactMarkdown children={postData.post.content} />
          <h1>Comments</h1>
          <ul style={{ listStyle: "none" }}>
            {postData.comments.map((c) => (
              <li>{c.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
