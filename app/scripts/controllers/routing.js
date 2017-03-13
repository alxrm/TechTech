'use strict';

angular.module('techTechApp')
  .controller('RouterController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (curLocation) {
      return $location.path() === curLocation;
    };
  }]);
