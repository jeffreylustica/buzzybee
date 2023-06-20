import { ProfileImage } from "./index";

const Chat = ({
  user,
  handleSelectUser,
  setIsActive,
  setSearchMode,
  setInputText,
}) => {
  const handleSelect = (user) => {
    handleSelectUser(user);
    setIsActive(true);
    setSearchMode(false);
    setInputText("");
  };

  return (
    <div
      className="flex items-center bg-white rounded-md mb-2 p-2 transition-all hover:bg-gray-100 cursor-pointer"
      onClick={() => handleSelect(user)}
    >
      <div className="min-w-max w-10 h-10 mr-4">
        <ProfileImage user={user} />
      </div>
      <div className="flex flex-col">
        <div className="text-base font-bold">{user.displayName}</div>
        <p className="text-sm text-gray-400 line-clamp-1">{user.lastMessage}</p>
      </div>
    </div>
  );
};

export default Chat;
