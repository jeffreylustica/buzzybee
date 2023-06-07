const MessageBubble = ({ message }) => {
  return (
    <div className="max-w-[500px] bg-gray-200 rounded-lg px-4 py-2 mb-6 shadow-sm shadow-gray-400">
      {message}
    </div>
  );
};

export default MessageBubble;
