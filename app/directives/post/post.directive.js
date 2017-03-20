import controller from './post.controller';
import template from './post.html';

export default function helloDirective() {
  return {
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      post: '<'
    }
  };
}
