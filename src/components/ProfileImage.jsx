import reactLogo from "../assets/reactLogo.svg";

const ProfileImage = () => {
  return (
    <img
      src={reactLogo}
      alt="user"
      className={`border-2 w-full h-full rounded-full`}
    />
  );
};

export default ProfileImage;
