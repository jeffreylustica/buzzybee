import { ProfileImage, Search, Chat } from "./index";

const ChatsList = () => {
  return (
    <div className="min-w-[320px] max-w-[30%] h-full bg-gold rounded-tr-3xl p-4 flex flex-col">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 mr-auto">
          <ProfileImage />
        </div>
        <h1 className="mr-auto -translate-x-1/2 text-gold-900 font-bold text-xl">
          Chats
        </h1>
      </div>
      <Search />
      <div className="flex-grow overflow-auto">
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
