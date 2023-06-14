import { useState } from "react";
import { ProfileImage, Search, Chat, DropdownMenu } from "./index";

const ChatsList = ({ isActive, user, signOutAcct }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handleToggle = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div
      className={`absolute sm:relative ${
        isActive ? "-translate-x-full sm:-translate-x-0" : "-translate-x-0"
      } sm:min-w-[320px] sm:max-w-[30vw] transition-all w-full h-full bg-gold rounded-tr-3xl p-4 flex flex-col`}
    >
      <div className="flex items-center mb-8 relative">
        <div
          className="w-12 h-12 mr-auto cursor-pointer"
          onClick={handleToggle}
        >
          <ProfileImage user={user} />
        </div>
        <div
          className={`z-10 absolute -bottom-32 transition-all duration-300 origin-top-left ${
            dropdownToggle ? "scale-1 opacity-1" : "scale-0 opacity-0"
          }`}
        >
          <DropdownMenu user={user} signOutAcct={signOutAcct} />
        </div>
        <h1 className="mr-auto -translate-x-1/2 text-gold-900 font-bold text-xl">
          Chats
        </h1>
      </div>
      <Search />
      <div className="grow overflow-auto pr-1">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
      </div>
    </div>
  );
};

export default ChatsList;
