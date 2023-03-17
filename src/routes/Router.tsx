import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Root from "./Root";

const myRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
          errorElement: <p>404 Not Found</p>,
        },
      ],
      errorElement: <p>404 Not Found</p>,
    },
  ],
  { basename: process.env.PUBLIC_URL + "/" }
);

export default myRouter;
