'use strict';

const ControllerSettings = {
  root: {
    route: '/',
    settings: {
      controller: 'MainController',
      templateUrl: 'views/main.html'
    }
  },
  about: {
    route: '/about',
    settings: {
      controller: 'AboutController',
      templateUrl: 'views/about.html'
    }
  }
};
