import IconPlay from '../../../components/icons/IconPlay';
import IconNewWindow from '../../../components/icons/IconNewWindow';
import WordMeaning from '../WordMeaning';

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

export default FoundResult;
