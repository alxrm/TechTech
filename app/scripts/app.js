'use strict';

ModuleBuilder.from(appSettings.name, appSettings.plugins)
  .withControllers(controllerSettings)
  .withRoutes(routingSettings)
  .build();
//
//angular
//  .module(appSettings.name, appSettings.plugins)
//  .config($routeProvider => RouteUtils.setupRoutes($routeProvider, routingSettings))
//  .controller('RouterController', controllerSettings.router)
//  .controller(controllerSettings.about.name, controllerSettings.about)
//  .controller(controllerSettings.books.name, controllerSettings.books)
//  .controller(controllerSettings.root.name, controllerSettings.root);
//
