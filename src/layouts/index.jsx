import Header from '../pageComponents/Header';
import SearchSection from '../pageComponents/SearchSection';
import ResultSection from '../pageComponents/ResultSection';
import { useContext } from 'react';
import { FontContext } from '../contexts/font.context';

function Layout() {
  const { font } = useContext(FontContext);

  return (
    <div className={`min-h-screen py-[58px] dark:bg-dark-05 ${font}`}>
      <Header />
      <SearchSection />
      <ResultSection />
    </div>
  );
}

export default Layout;
