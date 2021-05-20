interface Route {
  path: string
  callback: Function
}

interface Options {
  mode: string
  root: string
}

class Router {
  routes: Array<Route> = [];

  mode: string | null = null;

  root: string = '/';

  current: string

  constructor(options: Options) {
    this.mode = 'history'
    if (options.mode) this.mode = options.mode;
    if (options.root) this.root = options.root;
    this.current = ''
    //this.listen();
  }

  add = (path: string, callback: Function) => {
    this.routes.push({ path, callback });
    return this;
  };

  remove = (path: string) => {
    for (let i = 0; i < this.routes.length; i += 1) {
      if (this.routes[i].path === path) {
        this.routes.slice(i, 1);
        return this;
      }
    }
    return this;
  };

  flush = () => {
    this.routes = [];
    return this;
  };

  clearSlashes = (path: string) =>
    path
      .toString()
      .replace(/\/$/, '')
      .replace(/^\//, '');

  getFragment = () => {
    let fragment = '';
    if (this.mode === 'history') {
      fragment = this.clearSlashes(decodeURI(window.location.pathname + window.location.search));
      fragment = fragment.replace(/\?(.*)$/, '');
      fragment = this.root !== '/' ? fragment.replace(this.root, '') : fragment;
    } else {
      const match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : '';
    }
    return this.clearSlashes(fragment);
  };

  navigate = (path = '') => {
    if (this.mode === 'history') {
      window.history.pushState(null, '', this.root + this.clearSlashes(path));
    } else {
      window.location.href = `${window.location.href.replace(/#(.*)$/, '')}#${path}`;
    }
    return this;
  };

  // listen = () => {
  //   clearInterval(this.interval);
  //   this.interval = setInterval(this.interval, 50);
  // };

  interval = () => {
    if (this.current === this.getFragment()) return;
    this.current = this.getFragment();

    this.routes.some(route => {
      const match = this.current.match(route.path);
      if (match) {
        match.shift();
        route.callback.apply({}, match);
        return match;
      }
      return false;
    });
  };
}

export default Router
