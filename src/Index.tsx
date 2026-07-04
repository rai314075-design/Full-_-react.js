// Main Router Configuration Component (Index.tsx)
// This component sets up the entire routing structure for the application
// It defines all routes and their associated components using React Router v6
// Route hierarchy: Layout (parent) -> Home/About/Product (layout children) -> Product children (Phone/Laptop/Tablet)

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// BrowserRouter: provides routing context to app
// Routes: container for all route definitions
// Route: defines individual route path -> component mappings

// Import page components
import Home from "./Pages/Home";                    // Home page
import About from "./Pages/About";                  // About page
import Layout from "./Component/Layout";            // Master layout wrapper
import Product from "./Pages/Product";              // Product listing page
import Phone from "./Pages/Phone";                  // Phone nested route
import Laptop from "./Pages/Laptop";                // Laptop nested route
import Tablet from "./Pages/Tablet";                // Tablet nested route

const Index = () => {
  return (
    <>
      {/* Fragment <> wraps JSX without adding extra DOM node */}
      {/* Router component enables all routing functionality for child components */}
      <Router>
        {/* Routes container holds all Route definitions */}
        <Routes>
          {/* Parent route: path="/" renders Layout component */}
          {/* Layout stays visible for all child routes - provides consistent header/footer */}
          <Route path="/" element={<Layout />}>
            {/* index attribute makes Home the default child route (renders at "/") */}
            {/* It's the default content shown when parent route (/) is accessed */}
            <Route index element={<Home />} />
            {/* Child route: path="about" renders at "/about" inside Layout's Outlet */}
            <Route path="about" element={<About />} />
            {/* Child route: path="Product" renders at "/Product" inside Layout's Outlet */}
            {/* This route has its own nested children (Phone, Laptop, Tablet) */}
            <Route path="Product" element={<Product />}>
              {/* Nested child route: path="phone" renders at "/Product/phone" */}
              {/* These routes render inside Product component's Outlet */}
              <Route path="phone" element={<Phone />} />
              {/* Nested child route: path="laptop" renders at "/Product/laptop" */}
              <Route path="laptop" element={<Laptop />} />
              {/* Nested child route: path="tablet" renders at "/Product/tablet" */}
              <Route path="tablet" element={<Tablet />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

// Export component as default for use in main.tsx
export default Index;

/* Route Structure Explanation:
   /                           -> Layout (with Home as default via index)
     /about                    -> Layout + About page
     /Product                  -> Layout + Product page
       /Product/phone          -> Layout + Product + Phone
       /Product/laptop         -> Layout + Product + Laptop
       /Product/tablet         -> Layout + Product + Tablet

   - Layout is the parent route that wraps all pages
   - Home is the default child (index route)
   - Product has nested routes for different product categories
   - Each nested route inherits parent layout while content changes via Outlet
*/
