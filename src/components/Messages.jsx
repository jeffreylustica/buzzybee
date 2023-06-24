import { forwardRef } from "react";
import { Loader, MessageBubble } from "./index";

const Messages = forwardRef(({ messages, isLoading }, ref) => {
  return (
    <div className="grow overflow-auto p-2">
      {isLoading ? (
        <Loader />
      ) : (
        messages?.messages?.map((message, i) => (
          <MessageBubble key={i} message={message} />
        ))
      )}
      <div ref={ref}></div>
    </div>
  );
});

Messages.displayName = Messages;

export default Messages;
