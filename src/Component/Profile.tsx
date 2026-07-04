import { useLoaderData } from "react-router-dom";

// Profile component renders GitHub user data loaded by React Router
const Profile = () => {
  // useLoaderData reads data provided by the route loader
  const profileData = useLoaderData();
  console.log(profileData); // Log the fetched profile data for debugging

  return (
    <>
      <div className="profile-card">
        <h2>GitHub Profile</h2>
        {/* Display the user's avatar image */}
        <img src={profileData.avatar_url} alt="avatar" width={100} />
        {/* The following section shows profile metadata from loader data */}
        <p>
          <strong>Username:</strong> {profileData.login}
        </p>
        <p>
          <strong>Name:</strong> {profileData.name}
        </p>
        <p>
          <strong>Bio:</strong> {profileData.bio}
        </p>
        <p>
          <strong>Followers:</strong> {profileData.followers}
        </p>
        <p>
          <strong>Following:</strong> {profileData.following}
        </p>
        <a href={profileData.html_url} target="_blank" rel="noopener noreferrer">
          View GitHub Profile
        </a>
      </div>
    </>
  );
};

export default Profile;
