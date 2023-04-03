import { createContext, useRef, useState } from 'react';
import { API_URL } from '../constants';

export const SearchContext = createContext();

export default function SearchProvider(props) {
  const [found, setFound] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const refInput = useRef(null);

  async function onSearch() {
    const value = refInput.current.value;

    if (!value) {
      return false;
    }
    if (!refInput.current) return null;

    setLoading(true);
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
    return true;
  }

  return (
    <SearchContext.Provider
      value={{
        found,
        setFound,
        data,
        setData,
        loading,
        setLoading,
        refInput,
        onSearch,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
