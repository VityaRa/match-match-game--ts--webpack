import './styles.scss';
import img from './assets/card-image.png';
import { App } from './app';

window.onload = () => {
  const $app = document.getElementById('app');

  if (!$app) throw Error('App root not found');

  new App($app);
};
