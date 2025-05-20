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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} loader={getPosts} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/:id" element={<BlogDetails />} loader={blogDetail} />
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
