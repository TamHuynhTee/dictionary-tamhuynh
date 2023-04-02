import { useContext } from 'react';
import { SearchContext } from '../../../contexts/search.context';

const OtherWords = (props) => {
  const { words, title } = props;

  const { refInput, onSearch } = useContext(SearchContext);

  const handleChooseOtherWord = (word) => {
    if (refInput.current) {
      refInput.current.value = word;
      onSearch();
    }
  };

  return words.length > 0 ? (
    <div className="my-10 flex items-center flex-wrap gap-[22px]">
      <p className="text-xl text-gray-75">{title}</p>
      <div className="flex items-center flex-wrap gap-x-[22px] gap-y-2">
        {words.map((word, wordKey) => {
          return (
            <span
              key={wordKey}
              onClick={() => handleChooseOtherWord(word)}
              className="text-xl text-violet hover:underline cursor-pointer font-bold leading-6"
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OtherWords;
