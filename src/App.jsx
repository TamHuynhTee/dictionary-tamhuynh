import { useEffect } from 'react';
import './App.css';
import FontProvider from './contexts/font.context';
import SearchProvider from './contexts/search.context';
import { isDarkMode } from './helpers';
import Layout from './layouts';

function App() {
  useEffect(() => {
    const pickTheme = () => {
      if (isDarkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    pickTheme();

    window.addEventListener('storage', pickTheme);

    return () => {
      window.removeEventListener('storage', pickTheme);
    };
  }, []);

  return (
    <SearchProvider>
      <FontProvider>
        <Layout />
      </FontProvider>
    </SearchProvider>
  );
}

export default App;
