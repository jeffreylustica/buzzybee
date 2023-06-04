import { ChatsList, Rooms } from "./index";

const Account = () => {
  return (
    <div className="h-screen flex">
      <ChatsList />
      <Rooms />
    </div>
  );
};

export default Account;
