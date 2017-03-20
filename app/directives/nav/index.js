import angular from 'angular';
import navDirective from './nav.directive';

export default angular
  .module('Healthcare.directives.nav', [])
  .directive('nav', navDirective);
