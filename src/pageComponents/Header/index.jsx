import FontSwitcher from '../../components/FontSwitcher';
import IconMoon from '../../components/icons/IconMoon';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import IconLogo from '../../components/icons/IconLogo';

function Header() {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="logo">
          <IconLogo />
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

export default Header;
