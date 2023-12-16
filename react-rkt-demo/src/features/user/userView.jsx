import { useEffect } from "react";
import { fetchUsers } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

export const UserView = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(user, "user list");
  return (
    <div>
      <h2>List of users</h2>
      {user.loading && <div>loading .....</div>}
      {user.error && <div>error happend</div>}
      {!user.loading && user.users.length !== 0 ? (
        <div>
          {user.users.map((user, index) => {
            return (
              <div key={index}>
                <p>{user.name}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
