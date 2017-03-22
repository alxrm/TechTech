'use strict';

const controllerSettings = {
  root: ArticlesController,
  books: BooksController,
  about: AboutController,
  router: RouterController
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
      controller: controllerSettings.about.name,
      templateUrl: 'views/about.html'
    }
  }
};
