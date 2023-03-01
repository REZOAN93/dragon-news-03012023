import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Category from "../../Pages/Category/Category";
import News from "../../Pages/News/News";
import NewsInfo from "../../Pages/Shared/NewsInfo/NewsInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/news/:id",
        element: <NewsInfo />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: "/",
        element: <News />,
        loader: () => fetch(`http://localhost:5000`),
      },
      {
        path: "/categories/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
