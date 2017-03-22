'use strict';

class RouteUtils {
  static setupRoutes($routeProvider, controllers) {
    const keys = Object.keys(controllers);
    const root = controllers.root;
    let currentController = null;

    keys.forEach(key => {
      currentController = controllers[key];

      $routeProvider.when(currentController.route, currentController.settings);
    });

    $routeProvider.otherwise({
      redirectTo: root ? root.route : '/'
    });
  }
}
