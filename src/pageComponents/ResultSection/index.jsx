import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';
import FoundResult from './FoundResult';
import NotFoundResult from './NotFoundResult';

function ResultSection() {
  const { loading, found, data } = useContext(SearchContext);

  if (loading) return <div className="container my-[100px]">Loading...</div>;
  if (found == undefined) return <></>;
  if (found == false) return <NotFoundResult data={data} />;
  if (found == true) return <FoundResult data={data} />;

  return <div className="container my-[50px]"></div>;
}

export default ResultSection;
