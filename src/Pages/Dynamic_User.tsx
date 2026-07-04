// Dynamic User Detail Page Component
// This component displays detailed information for a single user based on dynamic route parameter
// It demonstrates React Router hooks: useParams, useLocation, and useNavigate

import { useParams, useLocation, useNavigate } from "react-router-dom";

const Dynamic_User = () => {
  // useParams() hook extracts parameters from the URL route
  // { slug } destructures the 'slug' parameter from the URL (e.g., /user/1 -> slug=1)
  const { slug } = useParams();

  // Array of user objects - same as in User component
  const user = [
    { id: 1, name: "John Doe", email: "Johnfa-border@gmail.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com", age: 30 },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@gmail.com", age: 35 },
    {
      id: 4,
      name: "Alice Williams",
      email: "alicewilliams@gmail.com",
      age: 28,
    },
  ];

  // .find() method searches array for user whose id matches the slug parameter
  // Number(slug) converts string URL parameter to number for comparison
  const singleUser = user.find((data) => data.id === Number(slug));
  console.log(singleUser);

  // useLocation() hook returns current location object containing pathname, search, etc.
  const location = useLocation();

  // useNavigate() hook returns a function to navigate to different routes programmatically
  const navigate = useNavigate();

  return (
    <div>
      {/* Display user details from the found user object */}
      {/* ?. is optional chaining - safely accesses property if object exists */}
      <h1>Slug: {singleUser?.name}</h1>
      <h1>Email: {singleUser?.email}</h1>
      <h1>Age: {singleUser?.age}</h1>

      {/* Conditional rendering using ternary operator */}
      {/* || operator means OR - shows if pathname is /user/3 OR /user/4 */}
      {/* ? renders the div, : null renders nothing if condition is false */}
      {location.pathname === `/user/3` || location.pathname === `/user/4` ? (
        <div>
          <h1>This is put by using useLocation in Dynamic_User</h1>
        </div>
      ) : null}

      {/* Button with onClick handler that navigates to home page */}
      <div>
        {/* onClick={() => navigate("/")} uses navigate function to go to home route */}
        <button onClick={() => navigate("/")}>Go to Home page</button>
      </div>
    </div>
  );
};

// Export component as default
export default Dynamic_User;
