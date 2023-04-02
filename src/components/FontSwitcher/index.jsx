import style from './style.module.css';
import IconArrowDown from '../icons/IconArrowDown';
import { useContext, useMemo } from 'react';
import { FONTS } from '../../constants';
import { FontContext } from '../../contexts/font.context';

function FontSwitcher() {
  // get current font from localStorage
  const { font, setFont } = useContext(FontContext);

  const fontByIndex = useMemo(() => Object.keys(FONTS), []);

  const changeFont = (pickedFontIndex) => {
    const value = fontByIndex[pickedFontIndex];
    setFont(value);
    window.localStorage.setItem('font', value);
  };

  const showFont = FONTS[font];

  return (
    <div className={style.switcher_container}>
      <label
        className={[style.switcher_result, 'text-dark-2D dark:text-white'].join(
          ' '
        )}
        htmlFor={'font-switcher'}
        // onClick={changeState}
      >
        <span className="font-bold text-lg">{showFont.label}</span>
        <span className="ml-4 block">
          <IconArrowDown />
        </span>
      </label>
      <input
        type="checkbox"
        id="font-switcher"
        hidden
        className={style.switch_toggle}
      />
      <label className={style.overlay_hidden} htmlFor={'font-switcher'}></label>
      <div className={style.switcher_overlay}>
        <ul className={style.switch_list}>
          {Object.values(FONTS).map((e, i) => {
            const isActive = e.value == showFont.value;
            return (
              <li
                key={i}
                className={[
                  style.switch_item,
                  `${fontByIndex[i]}`,
                  isActive ? style.active : '',
                ].join(' ')}
              >
                <label htmlFor={'font-switcher'} onClick={() => changeFont(i)}>
                  {e.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FontSwitcher;
