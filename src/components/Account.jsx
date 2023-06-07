import { useState } from "react";
import { ChatsList, Rooms } from "./index";

const Account = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-screen flex relative">
      <ChatsList isActive={isActive} />
      <Rooms setIsActive={setIsActive} />
    </div>
  );
};

export default Account;
