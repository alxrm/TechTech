'use strict';

ModuleBuilder.from(appSettings.name, appSettings.plugins)
  .withControllers(controllerSettings)
  .withRoutes(routingSettings)
  .build();
