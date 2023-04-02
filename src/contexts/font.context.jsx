import { createContext, useEffect, useState } from 'react';
import { currentFont } from '../helpers';

export const FontContext = createContext();

export default function FontProvider(props) {
  const [font, setFont] = useState(currentFont());

  useEffect(() => {
    const pickFont = () => {
      setFont(currentTheme());
    };
    window.addEventListener('storage', pickFont);
    return () => {
      window.removeEventListener('storage', pickFont);
    };
  }, []);

  return (
    <FontContext.Provider
      value={{
        font,
        setFont,
      }}
    >
      {props.children}
    </FontContext.Provider>
  );
}
