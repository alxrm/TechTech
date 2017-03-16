'use strict';

const controllers = {
  root: MainController,
  about: AboutController,
  router: RouterController
};

angular
  .module(appSettings.name, appSettings.plugins)
  .config($routeProvider => RouteUtils.setupRoutes($routeProvider, controllerRoutingSettings))
  .controller(controllers.router.name, controllers.router)
  .controller(controllers.about.name, controllers.about)
  .controller(controllers.root.name, controllers.root);

