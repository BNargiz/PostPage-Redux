import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../store/postpage/action";

export default function PostPages() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostById(id));
  }, [dispatch, id]);

  return <div>postpage{id}</div>;
}
