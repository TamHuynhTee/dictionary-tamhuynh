import style from './style.module.css';
import IconArrowDown from '../icons/IconArrowDown';

function FontSwitcher() {
  return (
    <label className={style.switcher_container}>
      <span className="font-bold">Sans Serif</span>
      <span className="ml-4 block">
        <IconArrowDown />
      </span>
    </label>
  );
}

export default FontSwitcher;
