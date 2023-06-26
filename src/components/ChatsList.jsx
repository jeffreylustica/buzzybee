import { useState } from "react";
import { ProfileImage, Search, Chat, DropdownMenu, Loader } from "./index";

const ChatsList = ({
  isActive,
  setIsActive,
  user,
  signOutAcct,
  searchUsers,
  filteredUsers,
  handleSelectUser,
  userChats,
  isLoading,
}) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleToggle = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div
      className={`absolute sm:relative z-10 ${
        isActive ? "-translate-x-full sm:-translate-x-0" : "-translate-x-0"
      } sm:min-w-[320px] sm:max-w-[25vw] transition-all w-full h-full bg-gold flex flex-col`}
    >
      <div className="flex items-center relative p-4">
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
        <h1 className="mr-auto -translate-x-1/2 font-bold text-xl">Chats</h1>
      </div>
      <Search
        searchUsers={searchUsers}
        setSearchMode={setSearchMode}
        inputText={inputText}
        setInputText={setInputText}
      />
      <div className="grow overflow-auto overflow-x-hidden">
        {searchMode && (
          <>
            <div className="mb-2">Search results: </div>
            {isLoading ? (
              <Loader />
            ) : filteredUsers.length === 0 ? (
              <p className="text-center font-bold">No results found</p>
            ) : (
              filteredUsers.map((user) => (
                <Chat
                  key={user.uid}
                  user={user}
                  handleSelectUser={handleSelectUser}
                  setIsActive={setIsActive}
                  setSearchMode={setSearchMode}
                  setInputText={setInputText}
                />
              ))
            )}
            <div className="border-b-2 mb-4 mt-8 border-gray-200"></div>
          </>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          userChats.map((chats) => (
            <Chat
              key={chats[0]}
              user={chats[1]}
              handleSelectUser={handleSelectUser}
              setIsActive={setIsActive}
              setSearchMode={setSearchMode}
              setInputText={setInputText}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ChatsList;
