import controller from './glossary-item.controller';
import template from './glossary-item.html';

export default function helloDirective() {
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      glossary: '<'
    }
  };
}
