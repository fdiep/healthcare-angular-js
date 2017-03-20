import controller from './nav.controller';
import template from './nav.html';

export default function navDirective() {
  return {
    restrict: 'E',
    controller,
    template,
    controllerAs: 'vm',
    scope: {}
  };
}
