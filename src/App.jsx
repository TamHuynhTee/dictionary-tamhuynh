import './App.css';
import SearchProvider from './contexts/searchContext';
import Header from './pageComponents/Header';
import SearchSection from './pageComponents/SearchSection';
import ResultSection from './pageComponents/ResultSection';
import { useEffect } from 'react';
import { isDarkMode } from './helpers';

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
      <div className="min-h-screen py-[58px] dark:bg-dark-05">
        <Header />
        <SearchSection />
        <ResultSection />
      </div>
    </SearchProvider>
  );
}

export default App;
