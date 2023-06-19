import { MessageBubble } from "./index";

const Messages = ({ messages }) => {
  return (
    <div className="grow overflow-auto pr-1">
      {messages?.messages?.map((message, i) => (
        <MessageBubble key={i} message={message} />
      ))}
    </div>
  );
};

export default Messages;
