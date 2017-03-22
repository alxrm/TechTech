'use strict';

class ModuleBuilder {
  constructor(module) {
    this._module = module;
    this._controllers = null;
    this._routes = null;

    this.withControllers = this.withControllers.bind(this);
    this.withRoutes = this.withRoutes.bind(this);
    this.build = this.build.bind(this);
  }

  static from(name, plugins) {
    return new ModuleBuilder(angular.module(name, plugins));
  }

  withRoutes(routes) {
    this._routes = routes;
    return this;
  }

  withControllers(controllers) {
    this._controllers = controllers;
    return this;
  }

  build() {
    if (this._routes) {
      ModuleUtils.appendRouteConfigs(this._module, this._routes);
    }

    if (this._controllers) {
      ModuleUtils.appendControllers(this._module, this._controllers);
    }

    return this._module;
  }
}
