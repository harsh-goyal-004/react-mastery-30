import React, { useContext } from "react";
import blogContext from "../context/BlogContext";
import { useParams } from "react-router-dom";

export default function CreatedBlogDetails() {
  const { blogState } = useContext(blogContext);
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      {blogState
        .filter((blog) => blog.id === Number(id))
        .map((blog) => (
          <div key={blog.id}>
            <h1 className="text-3xl font-bold tracking-wider text-center mb-4 mt-4">
              {blog.title}
            </h1>
            <p className="pl-4 text-gray-400 font-medium text-center mb-5">
              {blog?.desc}
            </p>
            <img
              src={URL.createObjectURL(blog?.image)}
              alt="blog"
              className=" mb-8 px-8"
            />
            <p className="font-medium text-lg px-2">{blog?.content}</p>
          </div>
        ))}
    </div>
  );
}
