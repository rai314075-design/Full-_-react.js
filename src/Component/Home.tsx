import img from '../hero image.jpg'
const Home = () => {
  return (
    <div>
      <div className="Home - container">
        <h1>Github Profile</h1>
        <p>
          View GitHub user profiles fecthed dynamically using {""}
          <strong>React Router v7 loaders</strong>.This dmonstrates preloading
          data, smooth navigation, and professional UI design.
        </p>
        <p>
            Explore user information like usernmame, bio, followers, and more in a clean layout.
        </p>
      </div>
      <div className = "home- image">
        <img src={img} alt="GitHub Profile" />
      </div>
    </div>
  );
};

export default Home;
