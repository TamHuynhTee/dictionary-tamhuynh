import { FONTS } from '../constants';

export const isDarkMode = () =>
  localStorage.getItem('theme') === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches);

export const currentFont = () => localStorage.getItem('font') || 'font-sans';
