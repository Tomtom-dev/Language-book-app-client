import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBooks } from "../../store/user/action";

export default function MyBooks() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <div>
      <h2>My Books</h2>
    </div>
  );
}
