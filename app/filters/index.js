import angular from 'angular';
import formatDate from './format-date';

export default angular.module('Healthcare.filters', [
  formatDate.name
]);
