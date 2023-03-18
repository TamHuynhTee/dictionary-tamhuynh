import style from './style.module.css';
import IconArrowDown from '../icons/IconArrowDown';
import { useCallback, useEffect, useRef, useState } from 'react';

const FONTS = [
  { label: 'Sans Serif', value: 'sans-serif' },
  { label: 'Serif', value: 'serif' },
  { label: 'Mono', value: 'mono' },
];

function FontSwitcher() {
  // get current font from localStorage
  const [font, setFont] = useState(FONTS[0]);
  const refOverlay = useRef(null);

  const closeOverlay = useCallback(() => {
    if (refOverlay.current) refOverlay.current.classList.remove(style.show);
  }, []);

  const openOverlay = useCallback(() => {
    if (refOverlay.current) refOverlay.current.classList.add(style.show);
  }, []);

  const changeFont = (pickedFont) => {
    setFont(pickedFont);
    closeOverlay();
  };

  const changeState = () => {
    if (refOverlay.current) {
      const isOpen = refOverlay.current.classList.contains(style.show);
      console.log(`file: index.jsx:32 => isOpen:`, isOpen);

      if (isOpen) closeOverlay();
      else openOverlay();
    }
  };

  useOutsideClick(refOverlay, closeOverlay);

  return (
    <div className={style.switcher_container}>
      <div
        className={[style.switcher_result, 'text-dark-2D dark:text-white'].join(
          ' '
        )}
        onClick={changeState}
      >
        <span className="font-bold text-lg">{font.label}</span>
        <span className="ml-4 block">
          <IconArrowDown />
        </span>
      </div>

      <div className={style.switcher_overlay} ref={refOverlay}>
        <ul className={style.switch_list}>
          {FONTS.map((e, i) => {
            const isActive = e.value == font.value;
            return (
              <li
                key={i}
                className={[
                  style.switch_item,
                  isActive ? style.active : '',
                ].join(' ')}
                onClick={() => changeFont(e)}
              >
                {e.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function useOutsideClick(ref, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);
}

export default FontSwitcher;
