import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Home = () => {
  const blogs = useLoaderData();
  return (
    <>
      <div className="w-full flex flex-wrap g justify-around min-h-screen ">
        {blogs.map((blog, index) => (
          <NavLink to={`/${blog.id}`}>
            <div
              className="w-72 pb-4 border-2 border-black rounded-lg flex-col flex items-center m-2 my-4 "
              key={index}
            >
              <img
                src={blog.social_image}
                className="w-full h-30 rounded-tr-lg rounded-tl-lg"
              />

              <h1 className="font-bold px-2 mt-3 h-16 mb-2 overflow-hidden ">
                {blog.title}
              </h1>

              <p className="text-[13px] font-medium h-20 mb-2 overflow-hidden  px-2 pt-2">
                {blog.description}
              </p>

              {/* <NavLink
              className="border-2 border-black px-2 rounded-lg self-start mt-2  text-sm bg-black  text-white"
              to={`/${blog.id}`}
            >
              Read more
            </NavLink> */}

              <div className="w-full flex justify-start   items-center">
                <img
                  src={blog.user.profile_image}
                  className="w-10 rounded-full mt-2 self-start mx-2"
                />
                <div className="h-full justify-center mt-1 flex flex-col">
                  <h1 className="uppercase font-semibold ">
                    {blog.user.username}
                  </h1>
                  <span className="text-gray-500">
                    {blog.readable_publish_date}
                  </span>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export async function getPosts() {
  const data = await fetch("https://dev.to/api/articles");
  const res = await data.json();
  console.log(res);
  return res;
}

export default Home;
