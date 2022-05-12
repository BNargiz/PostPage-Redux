import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../store/auth/selector";
import { logOut } from "../store/auth/slice";

export const Navbar = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={"/"}>Homepage</Link>
      {user ? (
        <>
          <h3>Welcome {user.name}</h3>
          <button
            onClick={() => {
              dispatch(logOut());
            }}
          >
            LogOut
          </button>
        </>
      ) : (
        <Link to={"/login"}>
          <button>Log in</button>
        </Link>
      )}
    </div>
  );
};
