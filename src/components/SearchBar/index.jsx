import { useContext, useRef, useState } from 'react';
import IconSearch from '../icons/IconSearch';
import { API_URL } from '../../constants';
import { SearchContext } from '../../contexts/searchContext';

function SearchBar(props) {
  const { setFound, found, setData, setLoading } = useContext(SearchContext);

  const refInput = useRef(null);
  const [error, setError] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const value = refInput.current.value;

    if (!value) {
      setError(true);
      return;
    }

    if (!refInput.current) return;

    // fetch
    const initCall = await fetch(API_URL + value);

    const data = await initCall.json();
    setData(data);

    if (initCall.ok) {
      if (found != true) setFound(true);
    } else {
      if (found != false) setFound(false);
    }
    setLoading(false);
  }

  function onChange(e) {
    if (error) setError(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="h-16 w-full bg-gray-F4 rounded-2xl relative block"
    >
      <span className="sr-only">Search</span>

      <input
        ref={refInput}
        onChange={onChange}
        className={`placeholder:opacity-25 caret-violet placeholder:text-dark-2D block bg-transparent w-full h-full rounded-2xl py-2 pl-6 pr-12 text-xl font-bold focus:outline-none focus:ring-violet focus:ring-1 transition ${
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
