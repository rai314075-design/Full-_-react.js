// Navigation Component with Conditional Rendering (Login/Logout)
// This component demonstrates conditional rendering based on authentication state
// It shows different menu items and buttons depending on whether user is logged in
// Imports: useState hook for state management, Link for navigation, useNavigate for programmatic navigation

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  // useState hook creates state variable 'active' to track login status
  // setActive function updates the active state
  // Initial value is false (logged out)
  const [active, setActive] = useState(false);

  // useNavigate hook returns navigate function for programmatic navigation
  const navigate = useNavigate();

  // handleClick function called when Login button is clicked
  const handleClick = () => {
    setActive(true);              /* Set active to true (logged in) */
    navigate("/user");           /* Navigate to user page */
  };

  // handleLogout function called when Logout button is clicked
  const handleLogout = () => {
    setActive(false);            /* Set active to false (logged out) */
    navigate("/home");           /* Navigate to home page */
  };

  return (
    <div>
      <ul>
        {/* Home link always visible */}
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Conditional rendering: show if active is true (logged in) */}
        {/* && operator: if active is true, render the following JSX */}
        {active && (
          <>
            {/* Fragment allows multiple elements without wrapper */}
            {/* User link visible only when logged in */}
            <li>
              <Link to="/user">User</Link>
            </li>
            {/* Logout button visible only when logged in */}
            <li>
              {/* onClick handler calls handleLogout function when button is clicked */}
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}

        {/* Conditional rendering: show if active is false (logged out) */}
        {/* !active means "not active" - renders when user is logged out */}
        {!active && (
          <>
            {/* Fragment for multiple elements */}
            {/* About link visible only when logged out */}
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* Contact link visible only when logged out */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Login button visible only when logged out */}
            <li>
              {/* onClick handler calls handleClick function when button is clicked */}
              <button onClick={handleClick}>Login</button>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

// Export component as default
export default Nav;
