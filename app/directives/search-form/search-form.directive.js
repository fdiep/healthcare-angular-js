import controller from './search-form.controller';
import template from './search-form.html';

export default function helloDirective() {
  return {
    restrict: 'E',
    template,
    link,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      onSearch: '&',
      triggerClearSearch: '='
    }
  };

  function link(scope, element, attrs, ctrl) {
    scope.$watch('vm.triggerClearSearch', (newVal) => {
      // clear search if boolean switched to true
      if(newVal) {
        ctrl.clearSearch();
      }
    });
  }
}
