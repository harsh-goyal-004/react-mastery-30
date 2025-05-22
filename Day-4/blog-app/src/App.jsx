import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home, { getPosts } from "./pages/Home";
import RootLayout from "./Layout/RootLayout";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails, { blogDetail } from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import CreatedBlogDetails from "./pages/CreatedBlogDetails";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={getPosts} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route
          path="/blog-details/:id"
          element={<BlogDetails />}
          loader={blogDetail}
        />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blog-detail/:id" element={<CreatedBlogDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
