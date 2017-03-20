import controller from './contact.controller';
import template from './contact.html';

export default function contactDirective() {
  return {
    restrict: 'E',
    controller,
    template,
    controllerAs: 'vm',
    scope: {}
  };
}
