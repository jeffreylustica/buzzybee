import { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Search = ({ searchUsers }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (text) => {
    setInputText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const textArr = generateTextCases(inputText);
    searchUsers(textArr);
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
    <form className="mb-10" onSubmit={handleSubmit}>
      <div className="relative">
        <HiSearch className="absolute w-5 h-5 top-1/2 -translate-y-1/2 ml-3" />
        <input
          type="search"
          placeholder="Search"
          className="w-full p-2 rounded-full pl-10"
          onChange={(e) => handleChange(e.target.value)}
          value={inputText}
        />
      </div>
    </form>
  );
};

export default Search;
