import { MessageBubble } from "./index";

const Messages = () => {
  const tempArr = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, inventore.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro aut, veritatis at facere ratione temporibus ab ducimus cumque fugiat ea accusamus fuga nulla molestiae neque adipisci quo aperiam dignissimos quaerat!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi maiores harum nam voluptatum odio.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius fugiat quasi temporibus, veniam cum odit ipsam quis voluptatibus doloremque perspiciatis suscipit, eaque laudantium sunt.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, inventore.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro aut, veritatis at facere ratione temporibus ab ducimus cumque fugiat ea accusamus fuga nulla molestiae neque adipisci quo aperiam dignissimos quaerat!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus commodi maiores harum nam voluptatum odio.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eius fugiat quasi temporibus, veniam cum odit ipsam quis voluptatibus doloremque perspiciatis suscipit, eaque laudantium sunt.",
    "Lorem ipsum dolor sit amet.",
  ];
  return (
    <div className="grow overflow-auto pr-1">
      {tempArr.map((message, i) => (
        <MessageBubble key={i} message={message} />
      ))}
    </div>
  );
};

export default Messages;
