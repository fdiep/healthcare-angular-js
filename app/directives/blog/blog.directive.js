import controller from './blog.controller';
import template from './blog.html';

export default function blogDirective() {
  return {
    restrict: 'E',
    controller,
    template,
    controllerAs: 'vm',
    scope: {}
  };
}
