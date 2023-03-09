import './App.css';
import logo from './assets/images/logo.svg';
import FontSwitcher from './components/FontSwitcher';
import ThemeSwitcher from './components/ThemeSwitcher';
import IconMoon from './components/icons/IconMoon';
import SearchBar from './components/SearchBar';
import { useContext } from 'react';
import SearchProvider, { SearchContext } from './contexts/searchContext';

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

function Header() {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center h-full">
          <div className="flex items-center">
            <FontSwitcher />
            <div className="mx-6 w-[1px] bg-gray-F4 h-[20px]"></div>
            <ThemeSwitcher />
            <div className="ml-5">
              <IconMoon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchSection() {
  return (
    <div className="container my-[50px]">
      <SearchBar />
    </div>
  );
}

function ResultSection() {
  const result = useContext(SearchContext);

  if (result.loading) return <div className="container">Loading...</div>;
  if (result.found == undefined) return <></>;
  if (result.found == false) return <NotFoundResult />;
  if (result.found == true) return <FoundResult />;

  return <div className="container my-[50px]"></div>;
}

function FoundResult() {
  return <div className="container my-[50px]">Found</div>;
}

function NotFoundResult() {
  return <div className="container my-[50px]">NotFound</div>;
}

export default App;
