'use strict';

class ArticlesController {
  constructor($scope) {
    this._scope = $scope;
    this._scope.articles = articles;
  }
}
