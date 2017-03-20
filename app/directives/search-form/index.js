import angular from 'angular';
import searchForm from './search-form.directive';

export default angular
  .module('Healthcare.directives.search-form', [])
  .directive('searchForm', searchForm);
