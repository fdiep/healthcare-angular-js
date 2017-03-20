import controller from './glossary.controller';
import template from './glossary.html';

export default function glossaryDirective() {
  return {
    restrict: 'E',
    controller,
    template,
    controllerAs: 'vm',
    scope: {}
  };
}
