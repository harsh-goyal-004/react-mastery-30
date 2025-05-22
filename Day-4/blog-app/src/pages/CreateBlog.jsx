import { useContext, useState } from "react";
import blogContext from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const { dispatch } = useContext(blogContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleFormSubmission = () => {
    const id = Date.now();
    dispatch({
      type: "ADD_BLOG",
      payload: { id, title, desc, image, content },
    });
    setTitle("");
    setDesc("");
    setImage(null);
    setContent("");
    navigate(`/blog-detail/${id}`);
  };

  return (
    <>
      <div className="h-full w-full flex justify-center items-center mt-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="border-2 h-[80%] w-[70%] flex flex-col rounded-xl p-2 px-4 gap-1"
        >
          <label htmlFor="title" className="font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            className="border-2 mb-4 rounded-lg  px-2 py-1 "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label htmlFor="description" className="font-medium ">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="border-2 px-2 py-1 rounded-lg mb-4"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="(Optional)"
          />

          <label htmlFor="image" className="font-medium">
            Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="image"
            className="border-2 mb-4 rounded-lg  px-2 py-1 "
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <label htmlFor="content" className="font-medium">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            cols={30}
            rows={10}
            type="text"
            name="title"
            className="border-2 mb-4 rounded-lg  px-2 py-1 "
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder="Enter the details here..."
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-2 py-2 rounded-lg font-medium tracking-wide uppercase"
            onClick={() => handleFormSubmission()}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
