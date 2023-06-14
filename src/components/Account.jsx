import { useState } from "react";
import { ChatsList, Rooms } from "./index";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, signOutAcct } = UserAuth();

  return (
    <div className="h-screen flex relative">
      <ChatsList isActive={isActive} user={user} signOutAcct={signOutAcct} />
      <Rooms setIsActive={setIsActive} />
    </div>
  );
};

export default Account;
