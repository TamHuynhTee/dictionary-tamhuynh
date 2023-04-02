import OtherWords from '../OtherWords';

function WordMeaning({ meaning }) {
  const definitions = meaning?.definitions || [];

  const synonyms = meaning?.synonyms || [];
  const antonyms = meaning?.antonyms || [];

  return (
    <div className="my-10">
      <div className="flex items-center">
        <p className="italic font-bold text-2xl text-dark-2D dark:text-white">
          {meaning?.partOfSpeech}
        </p>
        <div className="ml-5 flex-1 h-[1px] bg-gray-E9 dark:bg-gray-97"></div>
      </div>

      {definitions.length > 0 && (
        <div className="my-10">
          <p className="text-xl text-gray-75">Meaning</p>
          <ul className="mt-[25px] ml-[22px] list-disc marker:text-violet">
            {definitions.map((definition, definitionKey) => {
              return (
                <li
                  key={definitionKey}
                  className="text-lg font-normal leading-6 mt-[13px] first:mt-0"
                >
                  <span className="text-dark-2D dark:text-white">
                    {definition?.definition}
                  </span>
                  {definition?.example && (
                    <span className="block mt-[13px] text-gray-75">{`"${definition?.example}"`}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <OtherWords words={synonyms} title="Synonyms" />
      <OtherWords words={antonyms} title="Antonyms" />
    </div>
  );
}

export default WordMeaning;
