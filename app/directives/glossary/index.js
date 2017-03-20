import angular from 'angular';
import glossaryDirective from './glossary.directive';

export default angular
  .module('Healthcare.directives.glossary', [])
  .directive('glossary', glossaryDirective);
