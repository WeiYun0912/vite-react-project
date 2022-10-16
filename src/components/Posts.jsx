import React from "react";
import { useGetAllPostsQuery } from "@store/api/apiSlice";

const Posts = () => {
  const { data, isLoading } = useGetAllPostsQuery();

  if (isLoading) return <h3>Loading...</h3>;
  return (
    <>
      <h1>Posts</h1>
      {data?.map((post) => (
        <p key={post.title}>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
