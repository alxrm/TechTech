'use strict';

angular
  .module(AppSettings.name, AppSettings.plugins)
  .config($routeProvider => {
    RouteUtils.setupRoutes($routeProvider, ControllerSettings)
  });
