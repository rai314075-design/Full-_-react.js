// Product Page Component with Nested Routes
// This component demonstrates nested routing - it has child routes (Phone, Laptop, Tablet)
// Imports: Link for navigation, Outlet to render nested route components

import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      {/* Main product page heading */}
      <h1>Welcome to the Product Page</h1>
      <div>
        <h2>Our Products Page</h2>
        {/* Navigation menu with links to product categories */}
        {/* style prop with inline object adds flex layout with gap spacing */}
        <nav style={{ display: "flex", gap: "10px" }}>
          {/* Link to="phone" uses relative path since this is a nested route */}
          <Link to="phone">Phone</Link>
          {/* Link to="laptop" navigates to Product/laptop route */}
          <Link to="laptop">Laptop</Link>
          {/* Link to="tablet" navigates to Product/tablet route */}
          <Link to="tablet">Tablet</Link>
        </nav>
        <div>
          {/* Outlet component renders the child route component (Phone, Laptop, or Tablet) */}
          {/* It acts as a placeholder for nested route content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// Export component as default
export default Product;
