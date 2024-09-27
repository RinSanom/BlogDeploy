import { useLocation, useNavigate } from "react-router-dom";
import BlogCard from "../../components/card/BlogCart";

const ProfilePage = () => {
  const location = useLocation();
  const {
    thumbnail = "",
    title = "",
    content = "",
    profileUrl = "",
    username = "",
    bio = "",
    updated_at = "",
  } = location.state || {};

  console.log("Data in profile", {
    thumbnail,
    title,
    content,
    profileUrl,
    username,
    bio,
    updated_at,
  });

  return (
    <main className=" dark:bg-black">
      <div className="min-h-screen bg-gray-100 p-6 dark:bg-black dark:text-white">
        <div className=" p-8 rounded-lg shadow-lg mx-auto ">
          <div className="flex items-center mb-6">
            <div className="flex flex-col items-center">
              <img
                className="w-32 h-32 rounded-full shadow-md object-cover"
                src={profileUrl}
                alt="Profile"
              />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-semibold dark:text-white">
                {username}
              </h1>
              <p className="dark:text-white">{bio}</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Written by {username}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
          </div>
        </div>
        <BlogCard
          className=""
          thumbnail={thumbnail}
          username={username}
          profileUrl={profileUrl}
          title={title}
          updated_at={updated_at}
          content={content}
        />
      </div>
    </main>
  );
};

export default ProfilePage;
