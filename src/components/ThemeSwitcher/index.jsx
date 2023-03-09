import { useState } from 'react';
import style from './style.module.css';

function ThemeSwitcher() {
  const [checked, setChecked] = useState(false);

  function onChange() {
    setChecked((check) => !check);
  }

  return (
    <label className={style.switch}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={style.slider}></span>
    </label>
  );
}

export default ThemeSwitcher;
