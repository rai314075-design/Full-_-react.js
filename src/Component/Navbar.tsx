// Navbar Component with Active Link Styling
// This component displays a navigation bar with dynamic styling for active links
// Imports: Link for basic navigation, NavLink for active state styling
// NavLink provides isActive prop to conditionally style the current page link

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Fragment to wrap navbar without adding extra div */}
      {/* Navigation container with pink background and padding */}
      <nav
        style={{
          padding: "10px",          /* 10px internal spacing */
          backgroundColor: "pink",  /* Pink background color */
          marginBottom: "20px",     /* 20px space below navbar */
        }}
      >
        {/* NavLink component - like Link but tracks active state */}
        {/* isActive parameter indicates if this link matches current route */}
        {/* style prop accepts function that receives { isActive } parameter */}
        {/* Ternary operator: if isActive then use green style, else use transparent */}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",              /* Text color changes */
            backgroundColor: isActive ? "green" : "transparent", /* BG changes when active */
            padding: "5px 10px",     /* Internal padding */
            borderRadius: "5px",     /* Rounded corners */
            textDecoration: "none",  /* Remove underline from link */
          })}
          to="/"                     /* Navigate to home route */
        >
          Home
        </NavLink>
        {/* NavLink for About page with same active styling logic */}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "green" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to="/about"
        >
          About
        </NavLink>
        {/* NavLink for Contact page with dynamic active styling */}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "blue" : "transparent", /* Blue when active */
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to="/contact"
        >
          Contact
        </NavLink>
        {/* NavLink for Contact page (second instance - appears incomplete) */}
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "blue" : "transparent",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none",
          })}
          to="/user"
        >
          User
        </NavLink>
      </nav>
      <nav
        style={{
          padding: "10px",
          backgroundColor: "lightblue",
          marginBottom: "20px",
        }}
      >
        <Link style={{ marginRight: "10px" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "10px" }} to="/about">
          About
        </Link>
        <Link style={{ marginRight: "10px" }} to="/contact">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
