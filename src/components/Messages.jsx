import { forwardRef } from "react";
import { MessageBubble } from "./index";

const Messages = forwardRef(({ messages }, ref) => {
  return (
    <div className="grow overflow-auto p-2">
      {messages?.messages?.map((message, i) => (
        <MessageBubble key={i} message={message} />
      ))}
      <div ref={ref}></div>
    </div>
  );
});

Messages.displayName = Messages;

export default Messages;
