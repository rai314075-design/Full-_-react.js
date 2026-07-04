// Import React Router components for navigation, route rendering, and data loading.
import { Link, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

// Import the page components that will render for each route.
import Home from "./Component/Home";
import Products from "./Component/Products";
import About from "./Component/About";
import Profile from "./Component/Profile";

// Loader function used by React Router to fetch data before the Profile route renders.
async function githubProfileLoader() {
  const response = await fetch("https://api.github.com/users/sumanmalakar");

  // If the request fails, throw an error so the router can handle it.
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  // Return parsed JSON data to the route loader.
  return response.json();
}

// Layout component defines the common page structure shared by child routes.
function Layout() {
  return (
    <>
      {/* <> is a React Fragment shorthand that lets us return multiple elements */}
      <div>
        <header>
          <h1>My App</h1>
          <nav style={{ display: "flex", gap: "10px" }}>
            {/* Link components create client-side navigation links */}
            <Link to="/">Home</Link>|{" "}
            <Link to="/products">Products</Link>|{" "}
            <Link to="/about">About</Link>|{" "}
            <Link to="/profile" prefetch="intent">
              Profile
            </Link>
          </nav>
        </header>

        <main>
          {/* Outlet renders the currently matched child route component */}
          <Outlet />
        </main>

        <footer>
          <p>&copy; 2023 My App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

// Create the router configuration using createBrowserRouter.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        // index:true means this route renders at the parent path '/'
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
        // The loader function runs before the Profile route renders.
        loader: githubProfileLoader,
      },
    ],
  },
]);

// Main app component renders the router provider at the top level.
function MY_APP() {
  return <RouterProvider router={router} />;
}

export default MY_APP;
