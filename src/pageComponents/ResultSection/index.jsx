import { useContext } from 'react';
import { SearchContext } from '../../contexts/searchContext';
import FoundResult from './FoundResult';
import NotFoundResult from './NotFoundResult';

function ResultSection() {
  const { loading, found, data } = useContext(SearchContext);

  if (loading) return <div className="container">Loading...</div>;
  if (found == undefined) return <></>;
  if (found == false) return <NotFoundResult data={data} />;
  if (found == true) return <FoundResult data={data} />;

  return <></>;
}

export default ResultSection;
