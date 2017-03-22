'use strict';

ModuleBuilder.from(appSettings.name, appSettings.plugins)
  .withRoutes(routingSettings)
  .withControllers(controllerSettings)
  .build();
