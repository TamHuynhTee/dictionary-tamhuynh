import IconPlay from '../../../components/icons/IconPlay';
import IconNewWindow from '../../../components/icons/IconNewWindow';

function FoundResult({ data }) {
  return (
    <div className="container">
      {(data || []).map((e, i) => {
        const sources = e?.sourceUrls || [];

        const playAudio = () => {
          const existAudio = e?.phonetics?.find((au) => !!au?.audio);
          if (existAudio) {
            new Audio(existAudio?.audio).play();
          } else confirm('No audio available');
        };

        return (
          <div key={i} className="mt-6 first:mt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-dark-2D dark:text-white text-[64px] font-bold leading-[76px]">
                  {e.word}
                </p>
                <p className="text-violet text-[24px] font-normal leading-[30px] mt-[10px]">
                  {e.phonetic}
                </p>
              </div>

              <button onClick={playAudio} className="group">
                <IconPlay />
              </button>
            </div>
            {(e?.meanings || []).map((meaning, meaningKey) => (
              <WordMeaning key={meaningKey} meaning={meaning} />
            ))}

            {sources.length > 0 && (
              <div className="border-t border-t-gray-E9 pt-5 flex">
                <p className="text-sm text-gray-75 font-normal mr-5 underline">
                  Source
                </p>
                <a
                  href={sources[0]}
                  target="_blank"
                  rel="noindex,nofollow"
                  className="text-sm text-dark-2D dark:text-white font-normal underline flex items-center gap-x-2"
                >
                  {sources[0]} <IconNewWindow />
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

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

      {synonyms.length > 0 && (
        <div className="my-10 flex items-start">
          <p className="text-xl text-gray-75 mr-[22px]">Synonyms</p>
          <div className="flex items-center flex-wrap gap-x-[22px] gap-y-2">
            {synonyms.map((synonym, synonymKey) => {
              return (
                <span
                  key={synonymKey}
                  className="text-xl text-violet hover:underline cursor-pointer font-bold leading-6"
                >
                  {synonym}
                </span>
              );
            })}
          </div>
        </div>
      )}
      {antonyms.length > 0 && (
        <div className="my-10 flex items-center flex-wrap gap-x-[22px]">
          <p className="text-xl text-gray-75 mr-[22px]">Antonyms</p>
          <div className="flex items-center flex-wrap gap-x-[22px] gap-y-2">
            {antonyms.map((antonym, antonymKey) => {
              return (
                <span
                  key={antonymKey}
                  className="text-xl text-violet hover:underline cursor-pointer font-bold leading-6"
                >
                  {antonym}
                </span>
              );
            })}
          </div>
          <p className="text-xl text-gray-75"></p>
          {antonyms.map((antonym, antonymKey) => {
            return (
              <span
                key={antonymKey}
                className="text-xl text-violet cursor-pointer font-bold leading-6"
              >
                {antonym}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FoundResult;
