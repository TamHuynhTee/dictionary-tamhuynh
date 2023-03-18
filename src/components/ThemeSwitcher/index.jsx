import { useEffect, useState } from 'react';
import { isDarkMode } from '../../helpers';
import style from './style.module.css';

function ThemeSwitcher() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const pickTheme = () => {
      if (isDarkMode()) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    window.addEventListener('storage', pickTheme);
    return () => {
      window.removeEventListener('storage', pickTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode()) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <label className={style.switch}>
      <input type="checkbox" checked={isDarkMode()} onChange={toggleTheme} />
      <span className={style.slider}></span>
    </label>
  );
}

export default ThemeSwitcher;
