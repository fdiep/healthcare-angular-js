import angular from 'angular';
import glossaryItem from './glossary-item.directive';

export default angular
  .module('Healthcare.directives.glossaryItem', [])
  .directive('glossaryItem', glossaryItem);
