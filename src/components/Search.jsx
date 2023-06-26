import { HiSearch } from "react-icons/hi";

const Search = ({ searchUsers, setSearchMode, inputText, setInputText }) => {
  const handleChange = (text) => {
    setInputText(text);
    if (text === "") {
      setSearchMode(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      const textArr = generateTextCases(inputText);
      searchUsers(textArr);
      setSearchMode(true);
    }
  };

  const generateTextCases = (text) => {
    const upperCaseText = text.toUpperCase();
    const lowerCaseText = text.toLowerCase();
    //capitalize
    const textArr = text.split(" ");
    for (var i = 0; i < textArr.length; i++) {
      textArr[i] = textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1);
    }
    const capitalizedText = textArr.join(" ");

    //sentenceCase
    const sentenceCaseText = text.charAt(0).toUpperCase() + text.slice(1);

    return [upperCaseText, lowerCaseText, capitalizedText, sentenceCaseText];
  };

  return (
    <form className="p-4 mb-6" onSubmit={handleSubmit}>
      <div className="relative">
        <HiSearch className="absolute w-5 h-5 top-1/2 -translate-y-1/2 ml-3" />
        <input
          type="search"
          placeholder="Search"
          className="w-full p-2 rounded-full pl-10 focus:outline-none focus:bg-gray-100"
          onChange={(e) => handleChange(e.target.value)}
          value={inputText}
        />
      </div>
    </form>
  );
};

export default Search;
