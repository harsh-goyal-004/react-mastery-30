import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogDetails = useLoaderData();
  return (
    <>
      <div className="px-10">
        <h1 className="mt-7 font-medium text-3xl text-center">
          {blogDetails.title}
        </h1>

        <img
          src={blogDetails.social_image}
          alt="image"
          className="mx-auto mt-5 rounded-lg px-4 pb-4"
        />
        <div
          className=" text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: blogDetails.body_html }}
        ></div>
      </div>
    </>
  );
};

export async function blogDetail({ params }) {
  console.log(params);
  const data = await fetch("https://dev.to/api/articles/" + params.id);
  const res = await data.json();
  console.log(res);
  return res;
}

export default BlogDetails;
