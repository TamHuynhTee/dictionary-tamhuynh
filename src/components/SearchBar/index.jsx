import { useContext, useState } from 'react';
import IconSearch from '../icons/IconSearch';
import { SearchContext } from '../../contexts/search.context';

function SearchBar(props) {
  const { onSearch, refInput } = useContext(SearchContext);

  const [error, setError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const result = await onSearch();

    if (result === false) setError(true);
  }

  function onChange(e) {
    if (error) setError(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="h-16 max-md:h-12 w-full bg-gray-F4 dark:bg-dark-1F d rounded-2xl relative block"
    >
      <span className="sr-only">Search</span>

      <input
        ref={refInput}
        onChange={onChange}
        className={`placeholder:opacity-25 caret-violet dark:text-white dark:placeholder:text-gray-75 placeholder:text-dark-2D block bg-transparent w-full h-full rounded-2xl py-2 pl-6 pr-12 text-xl font-bold focus:outline-none focus:ring-violet focus:ring-1 transition max-md:text-lg ${
          error ? '!ring-error !ring-1' : ''
        }`}
        placeholder="Search for any word…"
        type="text"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-6 bg-transparent outline-none"
      >
        <IconSearch />
      </button>
      {error && (
        <p className="text-error text-xl font-normal leading-5 mt-2 absolute top-full">
          {'Whoops, can’t be empty…'}
        </p>
      )}
    </form>
  );
}

export default SearchBar;
