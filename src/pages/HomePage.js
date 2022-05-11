import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../store/feed/action";
import { selectFeedPosts } from "../store/feed/selector";

export default function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector(selectFeedPosts);
  console.log("is selector working fine?", posts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);

  return (
    <h1>
      hello
      {!posts
        ? "loading"
        : posts.map((p) => (
            <div key={p.id}>
              <Link to={`/post/${p.id}`}>{p.title}</Link>
            </div>
          ))}
      <button onClick={() => dispatch(fetchPosts)}>Load More</button>
    </h1>
  );
}
