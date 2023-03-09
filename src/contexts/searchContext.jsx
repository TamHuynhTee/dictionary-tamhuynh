import { createContext, useState } from 'react';

export const SearchContext = createContext();

export default function SearchProvider(props) {
  const [found, setFound] = useState();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        found,
        setFound,
        data,
        setData,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
