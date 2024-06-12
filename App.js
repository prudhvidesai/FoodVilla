import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/Header";
import Body from './src/Body';
import About from "./src/About";
import Contact from "./src/Contact";
import ResMenu from "./src/ResMenu";
import Error from "./src/Error";

// const headingEl = React.createElement("h1", {}, "Welcome to react...");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(headingEl);

const AppLayout = () => {
    return (
      <div className="app-cont">
        <Header />
        <Outlet />
      </div>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:id",
          element: <ResMenu />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter} />);