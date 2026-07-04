import { Link } from "react-router-dom";

// User component renders a list of user names as links to dynamic detail routes.
const User = () => {
  // Local array of user objects used to generate the list.
  const users = [
    { id: 1, name: "John Doe", email: "Johnfa-border@gmail.com", age: 25 },
    { id: 2, name: "Jane Smith", email: "janesmith@gmail.com", age: 30 },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@gmail.com", age: 35 },
    { id: 4, name: "Alice Williams", email: "alicewilliams@gmail.com", age: 28 },
  ];

  return (
    <>
      {/* Map over users and return a heading for each one. */}
      {users.map((user) => (
        <h1 key={user.id}>
          {/* Link creates a client-side navigation route with the user's id. */}
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </h1>
      ))}
    </>
  );
};

export default User;
