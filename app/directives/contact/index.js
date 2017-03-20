import angular from 'angular';
import contactDirective from './contact.directive';

export default angular
  .module('Healthcare.directives.contact', [])
  .directive('contact', contactDirective);
