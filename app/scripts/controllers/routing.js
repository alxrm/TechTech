'use strict';

class RouterController {
  constructor($scope, $location) {
    this.isActive = this.isActive.bind(this);

    this._location = $location;
    this._scope = $scope;
    this._scope.isActive = this.isActive;
  }

  isActive(curLocation) {
    return this._location.path() === curLocation
  }
}
