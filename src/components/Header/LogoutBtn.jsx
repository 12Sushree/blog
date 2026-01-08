import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
      dispatch(clearPosts());
      dispatch(clearPost());
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-4 py-2 rounded-full hover:bg-red-100 transition-colors duration-200 font-medium text-red-600"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
