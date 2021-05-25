export class Router {
  private routes: Array<string>;
  private currentPath: string;

  constructor() {
    this.routes = ['about', 'game', 'score'];
    this.currentPath = this.routes[0];
  }

  dispatch(path: string): void {
    if (this.routes.includes(path)) {
    }
  }
}
