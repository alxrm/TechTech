'use strict';

class ModuleUtils {
  static appendRouteConfigs(module, routingSettings) {
    module.config($routeProvider => RouteUtils.setupRoutes($routeProvider, routingSettings))
  }

  static appendControllers(module, controllersList) {
    const keys = Object.keys(controllersList);
    let currentController = null;

    keys.forEach(controllerKey => {
      currentController = controllersList[controllerKey];

      module.controller(currentController.name, currentController);
    })
  }
}
