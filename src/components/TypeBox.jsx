import { HiPaperAirplane } from "react-icons/hi";
const TypeBox = () => {
  return (
    <form className="flex items-center">
      <input
        type="text"
        placeholder="Message"
        className="bg-gray-200 shadow-gray-400 shadow-sm rounded-sm p-2 grow"
      />
      <button
        type="submit"
        className="p-4 text-gold transition-all hover:text-gold-900"
      >
        <HiPaperAirplane className="w-6 h-6" />
      </button>
    </form>
  );
};

export default TypeBox;