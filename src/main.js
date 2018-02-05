import './main.scss';
import { renderApp } from './app';

const baseElems = document.getElementsByTagName('base'); // eslint-disable-line
if (baseElems.length > 0) {
  baseElems[0].href = `${process.env.PUBLIC_URL || '/'}`;
}
renderApp();
