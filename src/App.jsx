import './App.css';
import logo from './assets/images/logo.svg';
import FontSwitcher from './components/FontSwitcher';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

function Header() {
  return (
    <div className="container mt-[58px]">
      <div className="flex justify-between items-center">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center h-full">
          <div className="">
            <FontSwitcher />
          </div>
          <div className="border-l h-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
