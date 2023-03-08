import style from './style.module.css';
import ArrowDown from '../../assets/images/icon-arrow-down.svg';

function FontSwitcher() {
  return (
    <label className={style.switcher_container}>
      <span className="font-bold">Sans Serif</span>
      <span className="ml-4 block">
        <img src={ArrowDown} alt="dropdown" />
      </span>
    </label>
  );
}

export default FontSwitcher;
