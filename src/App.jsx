import './App.css';
import SearchProvider from './contexts/searchContext';
import Header from './pageComponents/Header';
import SearchSection from './pageComponents/SearchSection';
import ResultSection from './pageComponents/ResultSection';

function App() {
  return (
    <SearchProvider>
      <div className="mt-[58px]"></div>
      <Header />
      <SearchSection />
      <ResultSection />
    </SearchProvider>
  );
}

export default App;
