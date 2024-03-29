'use strict';

const controllerSettings = {
  root: {
    name: 'ArticlesController',
    settings: ['$scope', ArticlesController]
  },
  books: {
    name: 'BooksController',
    settings: ['$scope', BooksController]
  },
  router: {
    name: 'RouterController',
    settings: ['$scope', '$location', RouterController]
  },
  slider: {
    name: 'SliderController',
    settings: ['$scope', SliderController]
  }
};

const routingSettings = {
  root: {
    route: '/',
    settings: {
      controller: controllerSettings.root.name,
      templateUrl: 'views/articles.html'
    }
  },
  books: {
    route: '/books',
    settings: {
      controller: controllerSettings.books.name,
      templateUrl: 'views/books.html'
    }
  },
  about: {
    route: '/about',
    settings: {
      templateUrl: 'views/about.html'
    }
  },
  article: {
    route: '/article/:id',
    settings: {
      templateUrl: attr => 'views/article' + attr.id + '.html'
    }
  }
};
